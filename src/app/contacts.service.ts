import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { Contact } from './models/contact';

import { API_ENDPOINT } from './app.tokens';

interface ContactResponse {
  item: Contact;
}

interface ContactsResponse {
  items: Contact[];
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private http: HttpClient, @Inject(API_ENDPOINT) private API_ENDPOINT: string) {
  }

  getContacts(): Observable<Contact[]> {
    const url = `${this.API_ENDPOINT}/contacts`;
    return this.http.get<ContactsResponse>(url)
      .pipe(map(data => data.items))
      .pipe(delay(500));
  }

  getContact(id: number): Observable<Contact> {
    const url = `${this.API_ENDPOINT}/contacts/${id}`;
    return this.http.get<ContactResponse>(url)
      .pipe(map(data => data.item))
      .pipe(delay(1000));
  }

  updateContact(contact: Contact) {
    const url = `${this.API_ENDPOINT}/contacts/${contact.id}`;
    return this.http.put(url, contact)
      .pipe(delay(1000));
  }
}
