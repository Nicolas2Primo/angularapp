import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  //Properties
  user!: User;

  //Methods
  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: 'Maria',
      lastName: 'Leticia',
      email: 'leticia@gmail.com',
    };
  }
}
