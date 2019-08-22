import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MissionstatementComponent } from './components/missionstatement/missionstatement.component';
import { ValuesComponent } from './components/values/values.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsNavComponent } from './components/terms-nav/terms-nav.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'eCommerce - Simplicity in Healthy Living' }
  },
  {
    path: 'mission',
    component: MissionstatementComponent
  },
  {
    path: 'values',
    component: ValuesComponent,
    data: { title: 'Terms of Service | eCommerce - Simplicity in Healthy Living' }
  },
  {
    path: 'cookies',
    component: CookiesComponent,
    data: { title: 'Cookies | eCommerce - Simplicity in Healthy Living' }
  },
  {
    path: 'privacy', component: PrivacyComponent,
    data: { title: 'Privacy | eCommerce - Simplicity in Healthy Living' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About | eCommerce - Simplicity in Healthy Living' }
  },
  {
    path: 'terms',
    component: TermsNavComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
