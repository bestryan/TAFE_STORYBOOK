import ContentSupportA from '../components/ContentSupportA.vue';

export default {
  title: 'Content Modules/Support Timing',
  component: ContentSupportA,
  tags: ['autodocs'],
};

export const Support_timing = {
  args: {
    lists: [
      { day: 'Mon', time: '8.30 AM - 5 PM' },
      { day: 'Tue', time: '8.30 AM - 5 PM' },
      { day: 'Wed', time: '8.30 AM - 5 PM' },
      { day: 'Thu', time: '8.30 AM - 5 PM' },
      { day: 'Fri', time: '8.30 AM - 5 PM' },
      { day: 'Sat', time: 'Closed' },
      { day: 'Sun', time: 'Closed' },
    ],
  },
};
