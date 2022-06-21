import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <navbar-component></navbar-component>
  <events-list></events-list>
  `
  ,
})
export class EventsAppComponent {
  title = 'angular_app';
}
