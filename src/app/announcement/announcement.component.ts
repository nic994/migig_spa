import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-announcement',
  imports: [CommonModule],
  templateUrl: './announcement.component.html',
  styleUrl: './announcement.component.css',
})
export class AnnouncementComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Delay modal opening to ensure the DOM is fully loaded
    setTimeout(() => {
      const modalElement = document.getElementById('announcementModal');
      if (modalElement) {
        const myModal = new Modal(modalElement);
        myModal.show();
      }
    }, 300); // Small delay for better UX
  }
}
