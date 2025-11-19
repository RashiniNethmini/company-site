import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  projectDetails: string = '';

  sendMessage() {
    // Handle form submission
    console.log({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      projectDetails: this.projectDetails
    });
  }
}
