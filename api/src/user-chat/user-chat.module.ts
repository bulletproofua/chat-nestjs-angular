import { Module } from '@nestjs/common';
import { UserChatController } from './user-chat.controller';
import { UserChatService } from './user-chat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserChatEntity } from './user-chat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserChatEntity])
  ],
  controllers: [UserChatController],
  providers: [UserChatService]
})
export class UserChatModule {}
