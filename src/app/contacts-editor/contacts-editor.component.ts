import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  private contact: Contact;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private contactsService: ContactsService) {
  }

  ngOnInit() {
    this.contactsService.getContact(this.activatedRoute.snapshot.params['id'])
      .subscribe(r => this.contact = r);
  }

  save() {
    this.contactsService.updateContact(this.contact)
      .subscribe(() => {
        this.gotoDetail();
      });
  }

  cancel() {
    this.gotoDetail();
  }

  private gotoDetail() {
    this.router.navigate(['contact', this.contact.id]);
  }
}