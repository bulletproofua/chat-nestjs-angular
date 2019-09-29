import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { LoadContacts } from '../../ngrx/actions/contacts.actions';

@Component({
  selector: 'app-chat-main',
  templateUrl: './chat-main.component.html',
  styleUrls: ['./chat-main.component.scss']
})
export class ChatMainComponent implements OnInit {
  // private socket: Socket, 
  constructor(private store: Store<any>) { }

  ngOnInit() {
    // this.store.dispatch(new LoadContacts())
    // this.socket.connect()

    // this.getUsers().subscribe((e) => {
    //   console.log("TCL: ChatMainComponent -> ngOnInit -> e", e)

    // })

    // this.socket.emit('users', { message: 'tatat'})
  }

  // getUsers(): Observable<any> {
  //   return this.socket.fromEvent('users');
  // }

}
