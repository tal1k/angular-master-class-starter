import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { CONTACT_DATA } from 'src/app/data/contact-data';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class ContactsAppComponent {
  contacts = CONTACT_DATA;
  trackContact(index: number, contact: Contact) {
    return contact.id;
  }
}
