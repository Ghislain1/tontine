import { trigger, transition, animate, style, query, group, state, animateChild } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
const ELASTIC_BEZIER = 'cubic-bezier(.26,1.96,.58,.61)';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('loadingAnimation', [
      transition(':enter', [
        query('.text', [
          style({ marginTop: '-200px' }),
          animate('1500ms ' + ELASTIC_BEZIER, style({ marginTop: '0px' }))
        ])
      ]),
      transition(':leave', [
        query('.text', [
          animate('800ms ease-out', style({ opacity: '0' }))
        ]),
        animate('300ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('routeAnimation', [
      transition('* => intro', [
        style({ position: 'relative' }),
        query(':enter, :leave', style({
          position: 'absolute', top: 0, left: 0, width: '100%'
        })),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100px)', opacity: 0 }),
            animate('300ms ease-out', style({ opacity: 1, transform: 'none' })),
            animateChild()
          ]),
        ])
      ]),
      transition('* => advanced, * => routing, * => basics, * => programmatic, * => resources', [
        query(':enter', animateChild())
      ]),
      transition('* => *', [])
    ])
  ]
})
export class AppComponent {

  public ready = false;

  title = 'tontine';

  constructor() {
    this.updateAsync();
  }
  async updateAsync(): Promise<void> {
    this.delay(1000 * 100);
    this.ready = true;
  }

  async delay(milliseconds: number): Promise<any> {
    return new Promise<void>((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }

}
