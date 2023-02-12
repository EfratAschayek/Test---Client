import { Component, OnInit } from '@angular/core';
import User from '../models/User';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    debugger
    if (this.userService.user.FirstName !== null && this.userService.user.LastName !== null)
      this.name = "to" + this.userService.user.FirstName + " " + this.userService.user.LastName
  }
  name: string = ""
}
