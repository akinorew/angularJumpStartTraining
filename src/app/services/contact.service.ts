import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Contact } from './../models/contact';

@Injectable()
export class ContactService {

  constructor(private http: Http) {
  }

  getContacts() {
    return this.http.get('http://localhost:4201/api/contacts')
      .map(res =>  res.json())
      .map(data => data.items);
  }

  getContact(id: number | string) {
    return this.http.get('http://localhost:4201/api/contacts/' + id)
      .map(res =>  res.json())
      .map(data => data.item);
  }

  updateContact(contact: Contact) {
    return this.http.put("http://localhost:4201/api/contacts/" + contact.id, contact);
  }
}
