import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventService } from 'src/app/events/shared/event.service';
//component
import { EventsAppComponent } from './events-app.component';
import { EventsThumbnailComponent } from './events/event-list/events_thumbnail.component';
import { EventsListComponent } from './events/event-list/event_list.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventDetailsComponent } from "./events/event-details/event-details.component";
//routerModule & Routes
import { RouterModule } from '@angular/router';
import { appRoutes } from "../routes";
//Toaster
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404component } from './error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    NavbarComponent,
    Error404component
    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),//Router module with appRoutes as root
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [EventService, EventRouteActivator],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
