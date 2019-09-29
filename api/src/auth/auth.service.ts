import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const currentUser = await this.usersService.findOne({ email: user.username, password: user.password} );
    const payload = { email: currentUser.email, sub: currentUser.id };
    return {
      id: currentUser.id,
      username: currentUser.username,
      email: currentUser.email,
      avatar: currentUser.avatar,
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: any): Promise<any | undefined> {
    const createdUser = await this.usersService.create(user);

    await this.usersService.createUserChats(createdUser.id);

    return { id: createdUser.id };
  }

}
