import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: SingleCategoryComponent },
  { path: 'post', component: SinglePostComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contact', component: ContactMeComponent },
  { path: 'term-conditions', component: TermsAndConditionsComponent },
];
