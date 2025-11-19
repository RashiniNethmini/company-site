import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.css'
})
export class TermsAndConditionsComponent implements OnInit, OnDestroy {
  @Output() closeModal = new EventEmitter<void>();

  ngOnInit(): void {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Add keyboard event listener for ESC key
    document.addEventListener('keydown', this.handleEscKey);
  }

  ngOnDestroy(): void {
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'auto';

    // Remove keyboard event listener
    document.removeEventListener('keydown', this.handleEscKey);
  }

  close(): void {
    this.closeModal.emit();
  }

  // Handle ESC key press to close modal
  handleEscKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  // Optional: Close modal when clicking outside (on overlay)
  closeOnOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('terms-overlay')) {
      this.close();
    }
  }
}
