import HeroBannerA from '../components/HeroBannerA.vue';

export default {
  title: 'Components/Hero Banner/Banner A',
  component: HeroBannerA,
  argTypes: {
    styles: {
      options: ['right', 'left'],
      control: { type: 'radio' },
    },
  },
};

export const Content_Left = {
  args: {
    styles: 'left',
    subheading: 'Subheading / H4 / Tagline',
    heading: 'Heading H1 Large',
    button_visible: true,
  },
};

export const Content_right = {
  args: {
    styles: 'right',
    subheading: 'Subheading / H4 / Tagline',
    heading: 'Heading H1 Large',
    button_visible: true,
  },
};
