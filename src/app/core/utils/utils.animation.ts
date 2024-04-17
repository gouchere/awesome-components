import {
  animate,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations'

const exampleAnimation = [
  trigger('listItem', [
    state(
      'default',
      style({
        transform: 'scale(1)',
        'background-color': 'white',
        'z-index': 1,
      })
    ),
    state(
      'active',
      style({
        transform: 'scale(1.05)',
        'background-color': 'rgb(201,157,242)',
        'z-index': 2,
      })
    ),
    transition('default=>active', [animate('100ms ease-in-out')]),
    transition(':enter', [
      query('span', [
        style({
          opacity: 0,
        }),
      ]),
      style({
        transform: 'translateX(-100%)',
        opacity: 0,
        'background-color': 'rgb(201,157,242)',
      }),
      animate(
        '250ms ease-out',
        style({
          transform: 'translateX(0)',
          opacity: 1,
          'background-color': 'white',
        })
      ),
      query(
        'span',
        animate(
          '500ms',
          style({
            opacity: 1,
          })
        )
      ),
    ]),
  ]),
]

export { exampleAnimation }
