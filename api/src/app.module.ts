import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './users/user.module';
import { ChatModule } from './chat/chat.module';
import { UserChatModule } from './user-chat/user-chat.module';

import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    ChatModule,
    UserChatModule,
    TypeOrmModule.forRoot(),
    MessageModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
