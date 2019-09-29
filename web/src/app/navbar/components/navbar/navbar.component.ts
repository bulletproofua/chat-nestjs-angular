import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
//ngrx
import { Store, select } from '@ngrx/store';
import { LogoutUser } from '../../../ngrx/user-module/actions/user.actions';
import * as fromUser from '../../../ngrx/user-module/reducers';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  public userName$ = this.store.pipe(select(fromUser.getUserName));

  constructor(private store: Store<any>) { }

  logout() {
    this.store.dispatch(new LogoutUser())
  }

}
