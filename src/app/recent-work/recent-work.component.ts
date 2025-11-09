import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-work',
  standalone: true,
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.css']
})
export class RecentWorkComponent {

  goToProject() {
    window.open('https://divinedreamsevents.netlify.app/', '_blank');
  }

}
