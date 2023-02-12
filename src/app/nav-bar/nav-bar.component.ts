import { Component, OnInit } from '@angular/core';
import exportFromJSON from 'export-from-json'
import User from '../models/User';

import Child from '../models/Child';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

