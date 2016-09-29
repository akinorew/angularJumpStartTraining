import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from './../models/contact';
import { ContactService } from './../services/contact.service';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css']
})

export class ContactsDetailComponent {
  contact: Contact;

  constructor(private contactService: ContactService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactService.getContact(id).subscribe(contact => this.contact = contact);
  }

}
