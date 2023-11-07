/** @type { import('@storybook/vue3').Preview } */

import { setup } from '@storybook/vue3';
import '../src/style.css';
import 'floating-vue/dist/style.css';
import FloatingVue from 'floating-vue';

setup((app) => {
  app.use(FloatingVue);
});

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
