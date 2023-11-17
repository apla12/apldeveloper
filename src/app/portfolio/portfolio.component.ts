import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

class Experience {
  position: String | undefined;
  dateAt: String | undefined;
  dateEnd: String | undefined;
  client: String | undefined;
  description: String | undefined;
  technology: Technology | undefined;
}

class Technology {
  backend: Backend | undefined;
  frontend: Frontend | undefined;
  database: Database | undefined;
  otherInformation: String | undefined;
}

class Backend {
  description: String | undefined;
  timeExperience: String | undefined;
  level: String | undefined;
}

class Frontend {
  description: String | undefined;
  timeExperience: String | undefined;
  level: String | undefined;
}
class Database {
  description: String | undefined;
  timeExperience: String | undefined;
  level: String | undefined;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  divClass: any;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.filterSelection('all');
  }

  filterSelection(name: any): void {
    var x, i;
    x = document.getElementsByClassName('filterDiv');
    if (name == 'all') name = '';
    for (i = 0; i < x.length; i++) {
      this.w3RemoveClass(x[i], 'show');
      if (x[i].className.indexOf(name) > -1) this.w3AddClass(x[i], 'show');
    }
  }

  w3AddClass(element: any, name: any) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += ' ' + arr2[i];
      }
    }
  }

  w3RemoveClass(element: any, name: any) {
    var i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = name.split(' ');
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(' ');
  }
}
