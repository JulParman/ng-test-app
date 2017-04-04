import {Component} from '@angular/core';
import {Contact} from "./contact/contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: [Contact];
  selectedContact: Contact;
  helloText:string;

  constructor() {
    this.contacts = [
      new Contact(0, 'Keijo', 'Joku'),
      new Contact(1, 'Masa', 'Joku')
    ];
  }

  contactSelected(contact: Contact) {
    this.selectedContact = contact;
  }
}
