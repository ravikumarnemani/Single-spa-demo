import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standardrules',
  templateUrl: './standardrules.component.html',
  styleUrls: ['./standardrules.component.scss']
})
export class StandardrulesComponent implements OnInit {

  constructor() {
    console.log("Child")
   }

  ngOnInit(): void {
  }

}
