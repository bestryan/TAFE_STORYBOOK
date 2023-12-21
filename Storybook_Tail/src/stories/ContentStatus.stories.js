import ContentStatus from '../components/ContentStatus.vue';

export default {
  title: 'Content Modules/Content Status',
  component: ContentStatus,
  tags: ['autodocs'],
};

export const Enrolment_open = {
  args: {
    type: 'green',
    status: 'Enrolment open',
    content: 'Places are available, you can enrol now.',
    label: 'Start enrolment',
    selectedSvgName: 'enrol',
  },
};

export const Application_required = {
  args: {
    type: 'purple',
    status: 'Application required',
    content:
      'Some courses have entry requirements you need to meet before you can enrol. Our course information outlines what these requirements are and how you can apply.',
    label: 'Start application',
    selectedSvgName: 'enrol',
  },
};

export const Waitlist_open = {
  args: {
    type: 'blue',
    status: 'Waitlist open',
    content:
      "Places in this course are full. Join the waitlist and we'll contact you if a place becomes available. Go back to view available study options.",
    label: 'Jolin waitlist',
    selectedSvgName: 'waitList',
  },
};

export const Register_interest = {
  args: {
    type: 'pink',
    status: 'Register interest',
    content:
      "Register your interest today and we'll be in touch shortly to support you as you begin your journey with TAFE NSW.",
    label: 'Register interest',
    selectedSvgName: 'info',
  },
};
