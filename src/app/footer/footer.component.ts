import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { PrivacyPolicyComponent } from "../pages/privacy-policy/privacy-policy.component";
import { NgIf } from '@angular/common';
import { TermsAndConditionsComponent } from '../pages/terms-and-conditions/terms-and-conditions.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [PrivacyPolicyComponent,NgIf,TermsAndConditionsComponent]
})
export class FooterComponent {
  constructor(private app: AppComponent) {}

  scrollTo(section: string) {
    this.app.scrollToSection(section);
  }

 showPrivacy = false;
 showTerms = false;
}
