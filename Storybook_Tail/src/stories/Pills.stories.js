import Pills from '../components/Pills.vue';

export default {
  title: 'Components/Pills/Pill default',
  component: Pills,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['green', 'purple', 'blue', 'pink', 'red'],
      control: { type: 'radio' },
    },
  },
};

export const Green = {
  args: {
    type: 'green',
    label: 'Enrolment now',
  },
};

export const Purple = {
  args: {
    type: 'purple',
    label: 'Application required',
  },
};

export const Blue = {
  args: {
    type: 'blue',
    label: 'Waitlist open',
  },
};

export const Pink = {
  args: {
    type: 'pink',
    label: 'Register interest',
  },
};

export const Red = {
  args: {
    type: 'red',
    label: 'Enrolment closed',
  },
};
