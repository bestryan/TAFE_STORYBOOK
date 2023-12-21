import CourseSearchCard from '../components/CourseSearchCard.vue';

export default {
  title: 'Components/Card/Course Search Card',
  component: CourseSearchCard,
  tags: ['autodocs'],
};

export const default_card = {
  args: {
    level: 'Qualification Level',
    subject: 'Subject',
    code: 'National Code',
    content:
      'A brief overview of the course. A brief overview of the course. A brief overview of the course. A brief overview of the course.',
  },
};

export const Example = {
  args: {
    level: 'Certificate III',
    subject: 'Apparel, Fashion and Textiles',
    code: 'MST31022-01',
    content:
      'Kickstart your career in the fashion industry with this entry-level course in fashion and garment creation. Construct a designer garment by aligning and sewing patterns. Apply more complex techniques such as creating darts or pleats.',
  },
};
