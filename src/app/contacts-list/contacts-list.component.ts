import { Component } from '@angular/core';
import { Contact } from './../models/contact';
import { OnInit } from '@angular/core';
import { ContactService } from './../services/contact.service';
import { Observable } from "rxjs/Observable";

//@Decorator
@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})

export class ContactsListComponent {
  contacts: Observable<Array<Contact>>; //-> this unsubscribes for us too

  constructor(private contactService: ContactService) {
  }

  //this will be more testable
  ngOnInit() {
    //it's possible to add error handler here
    // this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
    this.contacts = this.contactService.getContacts();
  }
}
