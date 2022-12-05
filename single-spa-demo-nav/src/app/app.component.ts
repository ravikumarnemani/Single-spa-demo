import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SideNav, Table, Pagination} from '@dds/components';

var DDS: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {
  title = 'nav';
  ddsSideNavAPI : any;
  ddsTableAPI: any;
  ddsPagiantionAPI: any;
  constructor(private router: Router){
    console.log('configured routes: ', this.router.config);
  }
  ngAfterViewInit(): void {   

//   const data = [[{"value":"Row 1"},{"value":"Row 1"},{"value":"Row 1"}],[{"value":"Row 2"},{"value":"Row 2"},{"value":"Row 2"}],[{"value":"Row 3"},{"value":"Row 3"},{"value":"Row 3"}],[{"value":"Row 4"},{"value":"Row 4"},{"value":"Row 4"}],[{"value":"Row 5"},{"value":"Row 5"},{"value":"Row 5"}],[{"value":"Row 6"},{"value":"Row 6"},{"value":"Row 6"}],[{"value":"Row 7"},{"value":"Row 7"},{"value":"Row 7"}],[{"value":"Row 8"},{"value":"Row 8"},{"value":"Row 8"}],[{"value":"Row 9"},{"value":"Row 9"},{"value":"Row 9"}],[{"value":"Row 10"},{"value":"Row 10"},{"value":"Row 10"}],[{"value":"Row 11"},{"value":"Row 11"},{"value":"Row 11"}],[{"value":"Row 12"},{"value":"Row 12"},{"value":"Row 12"}],[{"value":"Row 13"},{"value":"Row 13"},{"value":"Row 13"}],[{"value":"Row 14"},{"value":"Row 14"},{"value":"Row 14"}],[{"value":"Row 15"},{"value":"Row 15"},{"value":"Row 15"}],[{"value":"Row 16"},{"value":"Row 16"},{"value":"Row 16"}]];
//   const columns = [{"value":"Heading 1","sortBy":"none"},{"value":"Heading 2"},{"value":"Heading 3"}];

//   const config1 = {
//     "data" : data,
//     "columns": [{"value":"Heading 1","sortBy":"none"},{"value":"Heading 2"},{"value":"Heading 3"}]
//   }

//   const config = { "data": [ [ { "value": "Row 1" }, { "value": "Row 1" }, { "value": "Row 1" } ], [ { "value": "Row 2" }, { "value": "Row 2" }, { "value":
// "Row 2" } ], [ { "value": "Row 3" }, { "value": "Row 3" }, { "value": "Row 3" } ], [ { "value": "Row 4" }, { "value": "Row 4" }, { "value":
// "Row 4" } ], [ { "value": "Row 5" }, { "value": "Row 5" }, { "value": "Row 5" } ] ], 
// "columns": [ { "value": "Heading 1" }, { "value":"Heading 2" }, { "value": "Heading 33" } ],
// subscribe: ["pagination-756785993"],
// pagination: {
//         currentPage: 1,
//         rowsPerPage: 2,
//      }};
// // "pinnable": false, "pin": { "startColumn": 0, "pinLabel": "Pin column", "unpinLabel": "Unpincolumn" } }
// // ;

//   console.log("confg1-->" + config1);

//   console.log("config-->" + config);

//   // const config = {tblData,
//   //   subscribe: ["pagination-756785993"],
//   //   pagination: {
//   //       currentPage: 1,
//   //       rowsPerPage: 4,
//   //   }};

//   const tableElement = document.getElementById("table-756785993");

//   this.ddsTableAPI = new Table(tableElement, config);

//   const paginationElement = document.getElementById("pagination-756785993");
//   this.ddsPagiantionAPI = new Pagination(paginationElement, {subscribe: ["table-756785993"]})
  
    const sideNavElement1 = document.getElementById("dexsidenav");
    this.ddsSideNavAPI = new SideNav(sideNavElement1, {expanded: true});
    
  }

  

  goToStandardRules() {
    this.router.navigateByUrl('standard-rules');
  }
}

