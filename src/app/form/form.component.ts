import { Component, OnInit } from '@angular/core';
import Child from '../models/Child';
import User from '../models/User';
import { UserService } from '../services/user.service';
import * as XLSX from 'xlsx';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user
  }

  user: User

  addChild() {
    this.user.Children.push(this.userService.child)
    this.userService.child = new Child(null, null, null)
  }

  save(firstName, lastName, ID) {
    this.userService.addUser(this.userService.user).subscribe((succ) => {
      if (succ == null) {
        alert("User is already exists!")
      }
      else {
        alert("המשתמש נוסף בהצלחה")
        this.export()
        this.reset()
      }
    }, (err) => {
      alert("התרחשה שגיאה בקבלת הנתונים")
    })
  }

  public export() {
    const readyToExport = [
      JSON.parse(JSON.stringify(this.user)),
      [JSON.stringify(this.user.Children)]
    ];

    const workBook = XLSX.utils.book_new(); // create a new blank book
    const workSheet = XLSX.utils.json_to_sheet(readyToExport);

    XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
    XLSX.writeFile(workBook, 'temp.xlsx'); // initiate a file download in browser
  }

  reset() {
    this.user.FirstName = null
    this.user.LastName = null
    this.user.DateOfBirth = null
    this.user.Gender = null
    this.user.HMO = null
    this.user.IdNumber = null
    this.user.Children = []

    this.userService.child.DateOfBirth = null
    this.userService.child.FirstName = null
    this.userService.child.IdNumber = null
  }
}
