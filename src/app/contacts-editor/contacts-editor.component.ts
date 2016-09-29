import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from './../models/contact';
import { ContactService } from './../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: 'contacts-editor.component.html',
  styleUrls: ['contacts-editor.component.css']
})

export class ContactsEditorComponent {

  //cant use safe navigation operator
  contact: Contact = <Contact>{ address: {}};

  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.contactService.getContact(this.route.snapshot.params['id']).subscribe(contact => this.contact = contact);
  }

  cancel(contact: Contact) {
    this.router.navigate(["/contact", contact.id]);
  }

  save(contact: Contact) {
    var that = this;

    this.contactService.updateContact(this.contact).subscribe(function() {
      that.router.navigate(["/contact/" + contact.id]);
    });

    // this.contactService.updateContact(this.contact).subscribe(() => this.goToDetails(contact));
  }

}
