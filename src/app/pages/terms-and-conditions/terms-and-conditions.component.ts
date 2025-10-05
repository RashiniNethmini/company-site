import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export class TermsAndConditionsComponent {

  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit(); // just tell parent to hide
  }

}
