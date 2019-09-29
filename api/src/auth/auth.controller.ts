import { Controller, Post, Request, UseGuards, Get, Logger, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req, @Body() data: { email: string, password: string }) {
        return this.authService.login(data);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('curentUser')
    getProfile(@Request() req) {
      return req.user;
    }

    @Post('registerUser')
    async register(@Body() data: any) {
        return this.authService.register(data);
    }
}
