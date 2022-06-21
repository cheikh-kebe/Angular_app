import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div>Time: {{ event?.time }}</div>
      <div>Price: {{ event?.price }} $</div>
      <!-- ngClass allow you to set css property as a class so you can conditioning rendered elements syntax: [ngClass]="expression"] -->
      <div [ngClass]="isEarlyTime()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngswitchCase="'8:00 am'">Early start</span>
        <span *ngswitchCase="'10:00 am'">Late start</span>
        <span *ngSwitchDefault>Normal start</span>
      </div>
      <div>
        <address [hidden]="!event?.location"> 
          <!-- ngIf is a Boolean expression to evaluate as the condition for showing a template -->
          Location: {{ event?.location?.address }}
          <span class="pad-left">{{ event?.location?.city }}</span>
          <span> {{ event?.location?.country }}</span>
        </address>
        <div [hidden]="!event?.onlineUrl">
          <span>Online URL: {{event?.onlineUrl}}</span>
        </div>
      </div>
    </div>
  `,
  // styles are defined inside the component block.
  styles: [`
    .pad-left{
    padding-left: 20px;
    font-style: italic;
  }
  .thumbnail{
    height: 210px;
  }
  .green{ color: #00cecb !important}
  .bold { font-weight: bold}
  `],
})
export class EventsThumbnailComponent {
  @Input() event: any;

  isEarlyTime(){
    const isEarly = this.event && this.event.time === '8:00 am';
    return { green : isEarly , bold : isEarly}
  }
}
