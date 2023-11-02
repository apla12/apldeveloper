import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  txtAbout: any =
      'Developer with over a decade of experience in Java systems, offering services to multiple' +
      'companies with clients in the financial and corporate sectors. My main responsibilities include ' +
      'Java back-end development using various structures, including monolithic and microservices.';

    // 'Developer of Java Web / full stack systems with more than 10 years of experience, providing services to several companies with clients in the financial and corporate areas.' +
    // 'Among the main activities carried out are backend development with various java structures, such as: monolithic and microservices.';

  viewMenu = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.viewMenu = true;
      }
    });
  }
}
