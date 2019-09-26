import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  public activeBtn = 'Online';
  public contacts = [
    {
      id: 1,
      name: 'fsdfsd',
      avatar: '',
      status: ''
    },
    {
      id: 2,
      name: 'qqqqqq',
    },
    {
      id: 2,
      name: 'qqqqqq',
    },
    {
      id: 2,
      name: 'qqqqqq',
    },
    {
      id: 2,
      name: 'qqqqqq',
    },
    {
      id: 2,
      name: 'qqqqqq',
    },
    {
      id: 2,
      name: 'qqqqqq',
    },
    {
      id: 2,
      name: 'qqqqqq',
    },
    {
      id: 2,
      name: 'qqqqqq',
    },
    {
      id: 2,
      name: 'qqqqqq',
    },
    {
      id: 2,
      name: 'qqqqqq',
    },
    {
      id: 2,
      name: 'qqqqqq',
    },
    {
      id: 2,
      name: 'qqqqqq',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
