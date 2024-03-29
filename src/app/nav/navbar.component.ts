import { Component } from '@angular/core';

@Component({
  selector: 'navbar-component',
  templateUrl: 'navbar.component.html',
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
      li > a.active{
        color: #F97927
      }
    `,
  ],
})
export class NavbarComponent {}
