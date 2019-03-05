import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[];

  constructor(private readonly contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.getContacts()
      .subscribe(r => this.contacts = r);
  }

  trackContact(index: number, contact: Contact) {
    return contact.id;
  }
}