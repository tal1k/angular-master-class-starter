import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact';


@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  @Input()
  contact: Contact;

  @Output()
  edit = new EventEmitter<Contact>();

  @Output()
  back = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onEdit() {
    this.edit.emit(this.contact);
  }

  onBack() {
    this.back.emit();
  }
}
