import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// modules
import { NavbarModule } from '../navbar/navbar.module';

// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrx/reducers/index';

// components
import { ChatRoutingModule } from './chat-routing.module';
import { ChatMainComponent } from './components/chat-main/chat-main.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactInfoComponent } from './components/chat/contact-info/contact-info.component';
import { MessagesComponent } from './components/chat/messages/messages.component';
import { MessageComponent } from './components/chat/messages/message/message.component';
import { InputMessageBlockComponent } from './components/chat/input-message-block/input-message-block.component';
import { ContactComponent } from './components/contacts/contact/contact.component';

const COMPONENTS = [
  ChatMainComponent,
  ChatComponent,
  ContactsComponent,
  ContactInfoComponent,
  MessagesComponent,
  MessageComponent,
  InputMessageBlockComponent,
  ContactComponent
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    ChatRoutingModule,
    NavbarModule,
    StoreModule.forFeature('chat', reducers),
    EffectsModule.forFeature([]),
  ]
})
export class ChatModule { }
