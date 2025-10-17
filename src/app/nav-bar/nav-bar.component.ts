import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  menuOpen = false;
  constructor(private app: AppComponent) {}

  reloadPage(): void {
    window.location.reload();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  isMenuOpen() {
    return this.menuOpen;
  }

  scrollTo(section: string) {
    this.app.scrollToSection(section);
  }
}
