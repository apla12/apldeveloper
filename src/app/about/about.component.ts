import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  txtAbout: any =
    'Hi, my name is Ana Paula Lopes Araújo. I am a web / full stack developer. I have 13 years of experience in the field, always working with the best practices and consecrated frameworks.';

  viewMenu = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.viewMenu = true;
      }
    });
  }
}
