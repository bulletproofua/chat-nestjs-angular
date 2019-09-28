import { Injectable } from '@nestjs/common';

import * as uuidv1 from 'uuid/v1';
import * as bcrypt from 'bcrypt';
export interface User {
  id?: string;
  email: string;
  username: string;
  password: string;
  avatar: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[];
  public saltRounds = 10;

  constructor() {
    this.users = [
      {
        id: '1',
        email: 'qq@gmail.com',
        username: 'john',
        password: '$2b$10$ARxenNOfzvH6J.3TNxMSjOMqRnkI/7BIyES7wSBWhpXwfW6smGx2m',
        avatar: ''
      },
      {
        id: '2',
        email: 'qqw@gmail.com',
        username: 'chris',
        password: '$2b$10$ARxenNOfzvH6J.3TNxMSjOMqRnkI/7BIyES7wSBWhpXwfW6smGx2m',
        avatar: ''
      },
      {
        id: '3',
        email: 'qqe@gmail.com',
        username: 'maria',
        password: '$2b$10$ARxenNOfzvH6J.3TNxMSjOMqRnkI/7BIyES7wSBWhpXwfW6smGx2m',
        avatar: ''
      },
    ];
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async findAll(): Promise<User[] | undefined> {
    return this.users;
  }

  async Create(user: User): Promise<any> {
    const newUser = {
      id: uuidv1(),
      ...user,
      password: await this.getHash(user.password)
    };

    this.users.push(newUser);
    return newUser.id;
  }

  async getHash(password: string|undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
