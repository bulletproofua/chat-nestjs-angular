import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinTable, ManyToMany, OneToMany, PrimaryColumn, ManyToOne} from "typeorm";
import { UserEntity } from "src/users/user.entity";
import { ChatEntity } from "src/chat/chat.entity";
// import { ArticleEntity } from '../article/article.entity';

@Entity('userChat')
export class UserChatEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @PrimaryColumn()
  chatId: string;

  @PrimaryColumn()
  userId: string;

  @ManyToOne(type => UserEntity, user => user.id)
  user: UserEntity;

  @ManyToOne(type => ChatEntity, chat => chat.id)
  chat: ChatEntity;
}
