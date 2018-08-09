import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleResponsive() {
    const x = document.getElementById('topNav');
    if (x.className === 'col-auto topnav d-flex justify-content-center align-self-center') {
      x.className += ' responsive';
    } else {
      x.className = 'col-auto topnav d-flex justify-content-center align-self-center';
    }
  }
}
