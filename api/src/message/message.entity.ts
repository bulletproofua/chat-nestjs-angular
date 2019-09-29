import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, JoinTable, ManyToMany, OneToMany, PrimaryColumn} from "typeorm";

@Entity('message')
export class MessageEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @PrimaryColumn()
  chatId: string;

  @Column()
  time: string;

  @Column()
  message: string;

  @Column()
  userId: string;
}
