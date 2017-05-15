import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ProfileComponent } from '../profile/profile.component';
import { SearchComponent } from '../search/search.component';
import { JobDetailsComponent } from '../job-details/job-details.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'job/:id', component: JobDetailsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'search', component: SearchComponent},
  {path: 'about', component: AboutComponent},
  {path: '' , redirectTo: '/home', pathMatch: 'full'},
  {path: '**' , component: PageNotFoundComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
