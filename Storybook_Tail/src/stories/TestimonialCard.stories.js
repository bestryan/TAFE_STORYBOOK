import TestimonialCard from '../components/TestimonialCard.vue';

export default {
  title: 'Components/Card/Testimonial Card',
  component: TestimonialCard,
  tags: ['autodocs'],
  argTypes: {
    image: {
      options: ['lady1', 'lady2'],
      control: { type: 'radio' },
    },
  },
};

export const default_card = {
  args: {
    heading: 'Heading',
    subheading: 'Subheading',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus eget vitae malesuada bibendum mauris. Sed integer.',
    image: 'lady1',
  },
};

export const example = {
  args: {
    heading: 'Eunah Kyung',
    subheading: 'Korea',
    content:
      'I find myself well-prepared and informed, confident and capable. I highly recommend taking courses at TAFE NSW to people like me, who want to start a new career or a dream job at the right place.',
    image: 'lady2',
  },
};
