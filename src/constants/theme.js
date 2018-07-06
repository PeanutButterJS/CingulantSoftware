import { lighten } from 'polished';

export const theme = {
  brown: '#b99379',
  blue: '#02313b',
  white: 'white',
  darkBlue: '#021c22',
  quoteBlue: '#81bedb',
  grey: 'grey',
  lightBlue: lighten(0.05, '#02313b'),
  mediumBlue: lighten(0.01, '#02313b'),
  lightBrown: lighten(0.05, '#b99379')
};

export default theme;
