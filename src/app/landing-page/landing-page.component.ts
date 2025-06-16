import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeropageComponent } from "../heropage/heropage.component";
import { SkillspageComponent } from "../skillspage/skillspage.component";
import { Router, NavigationEnd } from '@angular/router';
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";
import { SkillsComponent } from "../skills/skills.component";
import { PortfolioComponent } from "../portfolio/portfolio.component";
@Component({
  selector: 'app-landing-page',
  imports: [NavbarComponent, HeropageComponent, SkillspageComponent, AboutComponent, ContactComponent, FooterComponent, SkillsComponent, PortfolioComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
   constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          setTimeout(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 200); // gives time for view to load
        }
      }
    });
  }
}
