import { Controller, Param, Get, UseGuards } from '@nestjs/common';
import { UserChatService } from './user-chat.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('userChat')
export class UserChatController {

    constructor(private readonly userChatService: UserChatService) {}

    // @UseGuards(AuthGuard('jwt'))
    // @Get(':id')
    // async getUserChats(@Param('id') id) {
    //     console.log(" ID:", id);
    //     const chatUsers = await this.userChatsService.findAll();
    //     console.log("TCL: UserChatController -> getUserChats -> chatUsers", chatUsers)
    //     return chatUsers.filter(el => el.userId == id);
    // }

}
