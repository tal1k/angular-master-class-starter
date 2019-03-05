import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';
import { ContactsService } from '../contacts.service';
import { EventBusService } from '../event-bus.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
  contact$: Observable<Contact>

  constructor(private router: Router, private route: ActivatedRoute, private contactsService: ContactsService, private eventBusService: EventBusService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.contact$ = this.contactsService.getContact(id).pipe(
      tap(contact => this.eventBusService.emit('APP_TITLE', `Kontakt '${contact.name}' anzeigen`))
    );

  }

  navigateToList() {
    this.router.navigate(['/']);
  }

  navigateToEditor(contact: Contact) {
    this.router.navigate(['/contact', contact.id, 'edit'])
  }

}
