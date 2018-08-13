import { Component, OnInit } from '@angular/core';
import {ConstantContactService} from '../../services/constant-contact.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  submitted = false;
  email = null;

  constructor(private ccService: ConstantContactService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.email.match(this.emailPattern)) {
      this.submitted = true;
      this.ccService.addContact(this.email).subscribe(data => {
        console.log(data);
      });
    } else {
      return;
    }
  }

}
