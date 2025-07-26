import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SkillspageComponent } from './skillspage/skillspage.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PorjectDetailComponent } from './porject-detail/porject-detail.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';


export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'skills', component: SkillspageComponent},
    {path: "home", component: LandingPageComponent},
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactComponent},
    {path: "skill", component: SkillsComponent},
    {path: "portfolio", component: PortfolioComponent},
    {path: "education", component: EducationComponent},
    {path: "project-detail/:id", component: PorjectDetailComponent},
    {path: 'certificates', component: CertificatesComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(
    [
      { path: '', component: LandingPageComponent },
      { path: '**', redirectTo: '' } // fallback
    ],
    {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled', // useful for better UX
      scrollOffset: [0, 70] // adjust for fixed header height
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
