import { Injectable } from '@nestjs/common';
import { UsersService, User } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const currentUser = await this.usersService.findOne(user.username);
    const payload = { email: currentUser.email, sub: currentUser.id };
    return {
      id: currentUser.id,
      username: currentUser.username,
      email: currentUser.email,
      avatar: currentUser.avatar,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: User): Promise<any | undefined> {
    const id = await this.usersService.Create(user);
    return { id: id };
  }

}
