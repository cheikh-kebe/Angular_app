import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventService } from 'src/app/events/shared/event.service';

import { EventsAppComponent } from './events-app.component';
import { EventsThumbnailComponent } from './events/events_thumbnail.component';
import { EventsListComponent } from './events/event_list.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavbarComponent,
    

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
   
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
