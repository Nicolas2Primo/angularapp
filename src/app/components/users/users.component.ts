import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: undefined,
    address: {
      street: '',
      city: '',
      state: '',
    },
  };
  users: User[] = [];
  showExtended: boolean = true;
  showUserForm: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};

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
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true,
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
        isActive: false,
        registered: new Date('01/02/2017 12:21:43'),
        hide: true,
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
        isActive: true,
        registered: new Date('01/02/2021 14:45:00'),
        hide: true,
      },
    ];

    this.loaded = true;
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: '',
      lastName: '',
      age: undefined,
      address: {
        street: '',
        city: '',
        state: '',
      },
    };
  }

  onSubmit(e: any) {
    console.log(123);

    e.preventDefault();
  }

  fireEvent(e: any) {
    console.log(e.target.value);
    console.log(e.type);
  }
}
