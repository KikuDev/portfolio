import { animate, state, style, transition, trigger } from '@angular/animations';

// Component transition animations
export const disappear =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1
      })
    ),
    transition(':leave', [
      animate('0.2s ease-out', style({
        opacity: 0
      }))
    ])
  ]);