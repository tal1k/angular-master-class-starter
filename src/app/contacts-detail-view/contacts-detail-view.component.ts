import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact$: Observable<Contact>

  constructor(private router: Router, private route: ActivatedRoute, private contactsService: ContactsService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.contact$ = this.contactsService.getContact(id);
  }

  navigateToList() {
    this.router.navigate(['/']);
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['/contact', contact.id, 'edit'])
  }

}
