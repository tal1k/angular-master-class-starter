import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable } from 'rxjs'
import { EventBusService } from '../event-bus.service';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts$: Observable<Array<Contact>>;

  constructor(private readonly contactsService: ContactsService, private eventBusService: EventBusService) {
  }

  ngOnInit() {
    this.eventBusService.emit('APP_TITLE', 'Kontakte');
    this.contacts$ = this.contactsService.getContacts();
  }

  trackContact(index: number, contact: Contact) {
    return contact.id;
  }
}