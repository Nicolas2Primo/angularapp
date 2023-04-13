import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  showExtended: boolean = true;
  loaded: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        firstName: 'Maria',
        lastName: 'Leticia',
        age: 21,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA',
        },
      },
      {
        firstName: 'Nicolas',
        lastName: 'Primo',
        age: 20,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA',
        },
      },
      {
        firstName: 'Willian',
        lastName: 'Fialho',
        age: 19,
        address: {
          street: 'Oliveira paiva',
          city: 'Fortaleza',
          state: 'CE',
        },
      },
    ];

    this.loaded = true;
    this.addUser({
      firstName: 'Igor',
      lastName: 'Feitosa',
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
