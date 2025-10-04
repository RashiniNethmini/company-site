import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, HomeComponent, FooterComponent, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zoura-labs';
}
