import Badge from '../components/Badge.vue';

export default {
  title: 'Components/Badge & Notification',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Small = {
  args: {
    number: 3,
  },
};

export const Large = {
  args: {
    number: 23,
  },
};
