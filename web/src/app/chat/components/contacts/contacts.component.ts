import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromContactsAction from '../../ngrx/actions/contacts.actions';
import * as fromContacts from '../../ngrx/reducers';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public activeBtn = 'Online';
  public contacts$ = this.store.pipe(select(fromContacts.getFilteredContactsBySearch));
  public selectedContactId$ = this.store.pipe(select(fromContacts.getSelected));


  public search = new FormControl('');

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.onSearchChange();
    this.store.dispatch(new fromContactsAction.LoadContacts())
  }

  onSearchChange() {
    this.search.valueChanges.subscribe(e => {
      this.store.dispatch(new fromContactsAction.SetSearchValue(e))
    })
  }

  trackByFn(index: any, item: any) {
    return item.userId;
  }

}
