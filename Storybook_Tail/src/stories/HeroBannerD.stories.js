import HeroBannerD from '../components/HeroBannerD.vue';

export default {
  title: 'Components/Hero Banner/Banner D',
  component: HeroBannerD,
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
    heading: 'Heading H1 Large',
    subheading: 'line 2 for reference only',
    content:
      'Lorem ipsum dolor sit amet, consectetur tincidunt. Lorem ipsum dolor sit amet, consectetur tincidunt.',
  },
};

export const Content_right = {
  args: {
    styles: 'right',
    heading: 'Heading H1 Large',
    subheading: 'line 2 for reference only',
    content:
      'Lorem ipsum dolor sit amet, consectetur tincidunt. Lorem ipsum dolor sit amet, consectetur tincidunt.',
  },
};
