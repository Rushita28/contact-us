import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  submitted = false;
  valid = false;
  email = null;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.email.match(this.emailPattern)) {
      this.submitted = true;
    } else {
      return;
    }
  }

}
