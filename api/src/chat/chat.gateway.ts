import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, WsResponse } from '@nestjs/websockets';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Client } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

    constructor(private chatService: ChatService) { }

    @WebSocketServer() server;
    users: number = 0;

    private connectedUserIds = new Set();

    async afterInit() {

    }

    @UseGuards(AuthGuard('jwt'))
    async handleConnection(client: Client) {

        // console.log("TCL: ChatGateway -> handleConnection -> client", client.request.headers.cookie)
        // console.log("--------- 1")

        // const clientCookies = client.request.headers.cookie;
        // const userData: any = this.chatService.getUserFromCookies(clientCookies);

        // const $ipAddress = client;
        // // console.log("TCL: ChatGateway -> handleConnection -> $ipAddress", $ipAddress)

        // // A client has connected
        // this.users++;
        // this.connectedUserIds.add(userData.id);
        // // console.log("TCL: ChatGateway -> handleConnection -> this.connectedUserIds", this.connectedUserIds)

        // this.server.emit('users', Array.from(this.connectedUserIds));
    }

    @UseGuards(AuthGuard('jwt'))
    async handleDisconnect(client: Client) {
        // console.log("--------- 2")
        // this.users--;

        // const clientCookies = client.request.headers.cookie;
        // const userData: any = this.chatService.getUserFromCookies(clientCookies);
        // // console.log("TCL: ChatGateway -> handleDisconnect -> userData", userData)

        // this.connectedUserIds.delete(userData.id);
        // // console.log("TCL: ChatGateway -> handleDisconnect -> this.connectedUserIds", this.connectedUserIds)

        // this.server.emit('users', Array.from(this.connectedUserIds));

    }

    // @UseGuards(AuthGuard('jwt'))
    // @SubscribeMessage('users')
    // handleEvent(client: Client, data: unknown): WsResponse<unknown> {

    //     console.log("TCL: ChatGateway -> data", data)
    //     console.log("TCL: ChatGateway -> client", client)

    //     const event = 'users';
    //     return { event, data };
    // }

    // @SubscribeMessage('chat')
    // async onChat(client, message){
    //     client.broadcast.emit('chat', message);
    // }

}