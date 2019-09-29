import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatEntity } from './chat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChatService {

  constructor(
    @InjectRepository(ChatEntity)
    private readonly chatRepository: Repository<ChatEntity>
) {}

  async create(): Promise<any> {
    const newChat = new ChatEntity();
    const savedChat = await this.chatRepository.save(newChat);
    return newChat;
  }

    // getUserFromCookies(clientCookies: string): string {
    //     let v = clientCookies.split('=').slice(1).join('=');
    //     v = decodeURIComponent(v);
    //     console.log("\n TCL: ChatService -> getUserFromCookies -> v", v)
    //     const userData = parse(v.split(';')[0]);
    //     console.log("TCL: ChatService -> getUserFromCookies -> userData", userData)

    //     return userData;
    // }

}

// export function parse(value: any) {
//     try {
//         return JSON.parse(value);
//     } catch (e) {
//         return value;
//     }
// }