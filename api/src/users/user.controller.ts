import { Controller, Post, Body, Get, UseGuards, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post('isUserNameIsUniq')
    async getIsUserNameIsUniq(@Body() data: { name: string }) {
        const user = await this.userService.findByUsername(data.name);
        return !(!!user);
    }

    @Post('allUserEmails')
    async getIsUserEmailIsUniq(@Body() data: { email: string }) {
        const user = await this.userService.findByEmail(data.email);
        return !(!!user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAllUsers() {
        return await this.userService.findAll();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('contacts/:id')
    async getContacts(@Param('id') id) {
        return await this.userService.getContacts(id);
    }

}
