import ContentModulesD from '../components/ContentModulesD.vue';

export default {
  title: 'Content Modules/Career guide',
  component: ContentModulesD,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['right', 'left'],
      control: { type: 'radio' },
    },
  },
};

export const Course_guide_form = {
  args: {
    heading: 'Get started now',
    description: 'Get our Career Guide delivered straight to your inbox.',
    button_visible: true,
    form_visible: true,
    label: 'Submit',
  },
};

export const Course_guide_download = {
  args: {
    heading: 'Thank you',
    description: 'Your Career Guide is on it way to your inbox.',
    button_visible: false,
    form_visible: false,
    label: 'Download',
  },
};
