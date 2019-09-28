import { Injectable } from '@nestjs/common';
import * as uuidv1 from 'uuid/v1';
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

  constructor() {
    this.users = [
      {
        id: '1',
        email: 'qq@gmail.com',
        username: 'john',
        password: 'changeme',
        avatar: ''
      },
      {
        id: '2',
        email: 'qqw@gmail.com',
        username: 'chris',
        password: 'secret',
        avatar: ''
      },
      {
        id: '3',
        email: 'qqe@gmail.com',
        username: 'maria',
        password: 'gues1s1',
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
      ...user
    };
    this.users.push(newUser);
    return newUser.id;
  }
}
