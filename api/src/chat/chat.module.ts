import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';

import { ChatGateway } from './chat.gateway';
import { ChatService } from './chat.service';
import { ChatEntity } from './chat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatEntity])
  ],
  controllers: [ChatController],
  providers: [ChatGateway, ChatService]
})
export class ChatModule {}
