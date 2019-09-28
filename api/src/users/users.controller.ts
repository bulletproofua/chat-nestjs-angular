import { Controller, Post, Body } from '@nestjs/common';
import { UsersService, User } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post('isUserNameIsUniq')
    async getIsUserNameIsUniq(@Body() data: { name: string }) {
        const users = await this.usersService.findAll();
        const usernames = users.map(user => user.username);
        return !usernames.includes(data.name);
    }

    @Post('allUserEmails')
    async getIsUserEmailIsUniq(@Body() data: { email: string }) {
        const users = await this.usersService.findAll();
        const emails = users.map(user => user.email);
        return !emails.includes(data.email);
    }

}
