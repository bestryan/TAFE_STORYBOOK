import { create } from '@storybook/theming/create';
import TAFE_LOGO from '../src/stories/assets/TAFE_LOGO.png';

export default create({
  base: 'light',
  brandTitle: 'TAFE Design System',
  //brandUrl: 'https://example.com',
  brandImage: TAFE_LOGO,
  brandTarget: '_self',
});
