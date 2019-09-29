import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { ChatEntity } from 'src/chat/chat.entity';
import { UserChatEntity } from 'src/user-chat/user-chat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserChatEntity, ChatEntity, UserEntity])
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
