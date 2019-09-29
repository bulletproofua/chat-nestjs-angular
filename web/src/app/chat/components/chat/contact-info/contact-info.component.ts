import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromContacts from '../../../ngrx/reducers';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent {

  public selectedContact$ = this.store.pipe(select(fromContacts.getSelectedContact));

  constructor(private store: Store<any>) { }

}
