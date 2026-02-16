import { Routes } from '@angular/router';

import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  {path: 'home', component: HomePage},
  {path: 'about', component: AboutPage},
  {path: 'contact', component: ContactPage},
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "not-found", component: NotFoundPage },
  { path: "**", redirectTo: "not-found", pathMatch: "full" }
];
