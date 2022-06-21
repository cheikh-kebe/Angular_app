import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventService } from 'src/shared/event.service';

import { EventsAppComponent } from './events-app.component';
import { EventsThumbnailComponent } from './events/events_thumbnail.component';
import { EventsListComponent } from './events/event_list.component';
import { NavbarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavbarComponent,
    

  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
