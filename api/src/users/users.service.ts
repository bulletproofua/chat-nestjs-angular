import { Injectable } from '@nestjs/common';

export interface User {
  id?: number;
  email: string;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        email: 'qq@gmail.com',
        username: 'john',
        password: 'changeme',
      },
      {
        id: 2,
        email: 'qqw@gmail.com',
        username: 'chris',
        password: 'secret',
      },
      {
        id: 3,
        email: 'qqe@gmail.com',
        username: 'maria',
        password: 'gues1s1',
      },
    ];
  }

  async findOne(email: string): Promise<User | undefined> {
    const a = this.users.find(user => user.email === email);
    console.log("a", a)
    return a;
  }

  async findAll(): Promise<User[] | undefined> {
    return this.users;
  }

  async setUser(user: User): Promise<User | undefined> {
    const newUser = {
      id: 22,
      ...user
    };
    this.users.push(newUser);
    return newUser;
  }

}
