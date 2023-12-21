import ListOnCourse from '../components/ListOnCourse.vue';

export default {
  title: 'Components/List/ListOnCourse',
  component: ListOnCourse,
  tags: ['autodocs'],
};

export const bullet_list = {
  args: {
    items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    isNumbered: false,
  },
};

export const number_list = {
  args: {
    items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    isNumbered: true,
  },
};

export const example = {
  args: {
    items: [
      'TAFE NSW Disability Support Service',
      'TAFE NSW Language, Literacy and Numeracy (LLN) support',
      'TAFE NSW Aboriginal Support; Learner support (ABE)',
      'TAFE NSW Careers, Counselling and Pathways Service',
      'TAFE NSW Libraries',
    ],
    isNumbered: false,
  },
};
