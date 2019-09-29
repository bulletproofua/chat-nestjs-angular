import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinTable, ManyToMany, OneToMany} from "typeorm";
import { UserChatEntity } from "src/user-chat/user-chat.entity";
import { MessageEntity } from "src/message/message.entity";

@Entity('chat')
export class ChatEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(type => UserChatEntity, userChat => userChat.chatId)
  userChat: UserChatEntity[];

  @OneToMany(type => MessageEntity, message => message.id)
  messages: MessageEntity[];
}
