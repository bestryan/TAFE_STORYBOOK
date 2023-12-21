import ContentSupportB from '../components/ContentSupportB.vue';

export default {
  title: 'Content Modules/Support Assistance',
  component: ContentSupportB,
  tags: ['autodocs'],
};

export const Support_Assistance = {
  args: {
    lists: [
      { services: 'Student Services', phone: '131 601' },
      {
        services: 'Counselling and careers',
        phone: '131 601',
        email: 'UltimoCounsellors@tafensw.edu.au',
      },
      {
        services: 'Disability services',
        phone: '131 601',
        email: 'SI.StudentAssociation@tafensw.edu.au',
      },
    ],
  },
};
