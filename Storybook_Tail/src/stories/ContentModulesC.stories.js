import ContentModulesC from '../components/ContentModulesC.vue';

export default {
  title: 'Content Modules/Course guide',
  component: ContentModulesC,
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
    heading: 'Get a free course guide',
    description:
      'Enter your details to receive your free Degree information pack, and a consultation with an enrolment advisor.',
    button_visible: true,
    form_visible: true,
    label: 'Submit',
  },
};

export const Course_guide_download = {
  args: {
    heading: 'Thank you',
    description:
      'Your information pack is on its way to your inbox. To view your brochure immediately, download now.',
    button_visible: true,
    form_visible: false,
    label: 'Download',
  },
};
