import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { SelectContact } from 'src/app/chat/ngrx/actions/contacts.actions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @Input() userData;
  @Input() selectedContactUserId: string;
  @Input() online: boolean;

  constructor(private store: Store<any>) { }

  selectContact(userId: string) {
    this.store.dispatch(new SelectContact(userId));
  }

}
