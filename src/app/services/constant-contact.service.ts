import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {RequestOptions} from '@angular/http';

@Injectable()
export class ConstantContactService {

  baseUrl = 'https://api.constantcontact.com/v2/contacts';

  constructor(private http: HttpClient) { }

  addContact(email) {
    console.log('add contact');
    const params = new HttpParams({
      fromObject : {
        'action_by': 'ACTION_BY_VISITOR',
        'api_key': 'sy97suu524mvyztr4bhj4vvn'
      }
    });
    const payload = {
      'email_addresses': [
        {
          'email_address': email
        }
      ],
      'lists': [
        {
          'id': '1302010411'
        }
      ]
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer a767c431-fadf-4687-8074-c731451c30e8'
    });
    return this.http.post(this.baseUrl, payload, {headers: headers, params: params});
  }
}
