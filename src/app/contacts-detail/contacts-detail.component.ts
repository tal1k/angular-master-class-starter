import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs'


@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contact$: Observable<Contact>;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.contact$ = this.contactsService.getContact(id);
  }
}
