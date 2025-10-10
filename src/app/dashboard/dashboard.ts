import { Component, inject, signal } from '@angular/core';
import { ContactService } from '../services/contact/contact-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  private contactService = inject(ContactService);
  allContacts = signal<any>([]);

  constructor() {
    this.contactService.getAllContacts().subscribe(contacts => {
      this.allContacts.set(contacts);
    });
  }
}
