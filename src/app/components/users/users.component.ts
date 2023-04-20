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
  enableAdd: boolean = true;
  currentClasses = {};

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
        image: 'https://picsum.photos/600?random=4',
        isActive: true,
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
        image: 'https://picsum.photos/600?random=5',
        isActive: false,
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
        image: 'https://picsum.photos/600?random=2',
        isActive: true,
      },
    ];

    this.loaded = true;
    /* this.addUser({
      firstName: 'Igor',
      lastName: 'Feitosa',
    }); */

    this.setCurrentClasses();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    };
  }
}
