import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <navbar-component></navbar-component>
  <router-outlet></router-outlet>
  `
  ,
})
export class EventsAppComponent {
  title = 'angular_app';
}
