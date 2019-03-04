import { Injectable } from '@angular/core';

import { Contact } from './models/contact';

import { CONTACT_DATA } from 'src/app/data/contact-data';

@Injectable()
export class ContactsService {
  getContacts(): Contact[] {
    return CONTACT_DATA;
  }

  getContact(id: number): Contact {
    return CONTACT_DATA.find(e => e.id == id);
  }
}
