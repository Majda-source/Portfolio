import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInRightAnimation = trigger('fadeInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-100px)' }),
    animate('0.5s', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);
