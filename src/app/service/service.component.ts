import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ needed for *ngFor

@Component({
  selector: 'app-service',
  standalone: true, // ✅ very important for Angular 19
  imports: [CommonModule], // ✅ enables ngFor and ngIf
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'High-performance websites and web apps using modern stacks.'
    },
    {
      icon: '🖥️',
      title: 'Desktop Software',
      description: 'Robust cross-platform desktop applications for your workflow.'
    },
    {
      icon: '📱',
      title: 'Mobile App',
      description: 'iOS and Android apps with delightful user experiences.'
    },
    {
      icon: '🧠',
      title: 'IT Consultation',
      description: 'Expert guidance on architecture, security, and scalability.'
    }
  ];
}
