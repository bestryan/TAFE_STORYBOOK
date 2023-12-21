import CourseAreaCard from '../components/CourseAreaCard.vue';

export default {
  title: 'Components/Card/Course Area Card',
  component: CourseAreaCard,
  tags: ['autodocs'],
};

export const default_card = {
  args: {
    heading: 'Heading',
    subheading: 'Subheading',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus eget vitae malesuada bibendum mauris. Sed integer.',
    button_visible: true,
    heart_visible: true,
  },
};

export const Current_course_area_card = {
  args: {
    heading: 'Heading',
    subheading: 'Subheading',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus eget vitae malesuada bibendum mauris. Sed integer.',
    button_visible: false,
    heart_visible: false,
  },
};

export const Example = {
  args: {
    heading: 'Education and Training',
    subheading: '10 Courses',
    content:
      'Focus on your love of learning and knowledge with an education and training qualification. Help nurt...',
    button_visible: false,
    heart_visible: false,
  },
};
