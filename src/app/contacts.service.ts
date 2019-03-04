import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Contact } from './models/contact';

import { Observable } from 'rxjs';

interface ContactResponse {
  item: Contact;
}

interface ContactsResponse {
  items: Contact[];
}

@Injectable()
export class ContactsService {
  constructor(private http: HttpClient, @Inject('API_ENDPOINT') private API_ENDPOINT: string) {
  }

  getContacts(): Observable<Contact[]> {
    const url = `${this.API_ENDPOINT}/api/contacts`;
    return this.http.get<ContactsResponse>(url)
      .pipe(map(data => data.items));
  }

  getContact(id: number): Observable<Contact> {
    const url = `${this.API_ENDPOINT}/api/contacts/${id}`;
    return this.http.get<ContactResponse>(url)
      .pipe(map(data => data.item));
  }
}
