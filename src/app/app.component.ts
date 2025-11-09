import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { ServiceComponent } from './service/service.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { RecentWorkComponent } from './recent-work/recent-work.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientComponent } from './client/client.component';
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { PrivacyPolicyComponent } from "./pages/privacy-policy/privacy-policy.component";
import { TermsAndConditionsComponent } from "./pages/terms-and-conditions/terms-and-conditions.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, HomeComponent, FooterComponent, ChooseUsComponent, ServiceComponent, RecentWorkComponent, AboutUsComponent, ClientComponent, ContactUsComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zoura-labs';

  currentPage: 'privacy' | 'terms' | null = null;

   scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  showPage(page: 'privacy' | 'terms') {
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closePage() {
    this.currentPage = null;
  }


}
