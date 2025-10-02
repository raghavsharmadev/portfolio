import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../services/contact/contact-service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  private formBuilder: FormBuilder = inject(FormBuilder);
  private contactService = inject(ContactService);
  contactForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.addContact(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Form submitted successfully', response);
          this.contactForm.reset();
        },
        error: (error) => {
          console.error('Error submitting form', error);
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
