// privacy-policy.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent {
  @Output() closeModal = new EventEmitter<void>();

  constructor() {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'auto';
  }

  close(): void {
    this.closeModal.emit();
  }

  // Optional: Close modal when clicking outside
  closeOnOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('privacy-overlay')) {
      this.close();
    }
  }
}
