import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  views: Array<Object> = [
    {
      icon: 'home',
      name: 'Home',
      description: 'Browse the latest jobs',
      link: '/home'
    },
    {
      icon: 'search',
      name: 'Search',
      description: 'Search jobs that matches your skills',
      link: '/search'
    },
    {
      icon: 'person',
      name: 'Profile',
      description: 'Edit your profile',
      link: '/profile'
    },
    {
      icon: 'info',
      name: 'About',
      description: 'About WF-Bitcoins',
      link: '/about'
    }
  ];
}
