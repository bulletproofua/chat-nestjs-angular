import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import * as crypto from 'crypto';
import { UserEntity } from './user.entity';
import { getRepository, Repository, In } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatEntity } from 'src/chat/chat.entity';
import { UserChatEntity } from 'src/user-chat/user-chat.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(ChatEntity)
    private readonly chatRepository: Repository<ChatEntity>,
    @InjectRepository(UserChatEntity)
    private readonly userChatRepository: Repository<UserChatEntity>
  ) {

    // const a = this.getContacts("eb883c1a-aed1-44b8-9864-d152543eb89b");
  }

  async findOne(loginUser: { email: string, password: string}): Promise<UserEntity> {
    const findOneOptions = {
      email: loginUser.email,
      password: crypto.createHmac('sha256', loginUser.password).digest('hex'),
    };

    return await this.userRepository.findOne(findOneOptions);
  }

  async findByUsername(username: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ username: username });
    return user;
  }

  async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ email: email });
    return user;
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async create(dto: any): Promise<any> {

    const {username, email, password, avatar} = dto;
    const qb = await getRepository(UserEntity)
      .createQueryBuilder('user')
      .where('user.username = :username', { username })
      .orWhere('user.email = :email', { email });
    const user = await qb.getOne();

    if (user) {
      const errors = {username: 'Username and email must be unique.'};
      throw new HttpException({message: 'Input data validation failed', errors}, HttpStatus.BAD_REQUEST);
    }

    const newUser = new UserEntity();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;
    newUser.avatar = avatar;

    const savedUser = await this.userRepository.save(newUser);
    return savedUser;
  }

  async createUserChats(userId: string): Promise<void> {
    const allUsers = await this.findAll();
    const filteredUsers = allUsers.map(user => user.id !== userId ? user : undefined).filter(Boolean);
    await filteredUsers.forEach(async (user: any) => {
      const newChat = new ChatEntity();
      const savedChat = await this.chatRepository.save(newChat);
      // create chat for me
      await this.createUserChat(userId, savedChat.id);
      // create chat for user
      await this.createUserChat(user.id, savedChat.id);
    });
  }

  async createUserChat(userId, chatId) {
    const newUserChat = new UserChatEntity();
    newUserChat.chatId = chatId;
    newUserChat.userId = userId;
    const createdEL = await this.userChatRepository.save(newUserChat);
    return createdEL;
  }

  async getContacts(userId: string) {
    const userChats = await this.userChatRepository.find({
      select: ['chatId'],
      where: { userId: userId }
    });

    const chatIds: string[] = userChats.map(e => e.chatId);

    const contactsData = await this.userChatRepository.find({
      relations: ['user'],
      where: { chatId: In(chatIds) }
    });

    const contacts = contactsData.map(chat => {
      const user = chat.user;
      if (chat.user.id !== userId) {
        return  {
          userId: user.id,
          chatId: chat.chatId,
          username: user.username,
          avatar: user.avatar
        };
      }
    }).filter(Boolean);
    return contacts;
  }

}
