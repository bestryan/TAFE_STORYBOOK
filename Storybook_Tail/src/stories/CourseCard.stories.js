import CourseCard from '../components/CourseCard.vue';

export default {
  title: 'Components/Card/Course Card',
  component: CourseCard,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['desktop', 'mobile'],
      control: { type: 'radio' },
    },
  },
};

export const default_card = {
  args: {
    type: 'mobile',
    level: 'Qualification Level',
    subject: 'Subject',
    code: 'National Code',
    content:
      'A brief overview of the course. A brief overview of the course. A brief overview of the course. A brief overview of the course.',
    listOne: ['Lorem ipsum one', 'Lorem ipsum one', 'Lorem ipsum one'],
    listTwo: ['Lorem ipsum two', 'Lorem ipsum two', 'Lorem ipsum two'],
  },
};

export const Example_business = {
  args: {
    type: 'mobile',
    level: 'Certificate III',
    subject: 'Business',
    code: 'BSB30120-01',
    content:
      'Become an administrative assistant and more in the exciting business world. This is a highly regarded qualification and a great starting point for your business services journey. Get a taste of different business areas and be ready to join the workforce or continue your business studies.',
    listOne: ['No entry requirements for this course'],
    listTwo: [
      'administrative assistant',
      'customer service representative',
      'receptionist',
      'general clerk',
    ],
  },
};

export const Example_management = {
  args: {
    type: 'desktop',
    level: 'Diploma',
    subject: 'Human Resource Management',
    code: 'BSB50320-01',
    content:
      'Progress your career as a human resources professional. Learn how to use empathy and resilience to maintain the engagement and performance of employees. Help businesses successfully adapt to rapidly changing environments.',
    listOne: [
      'Completion of four units from the Certificate IV in Human Resource Management: BSBHRM411 (Administer performance development processes)',
      'BSBHRM412 (Support employee and industrial relations), BSBHRM415 (Coordinate recruitment and onboarding)',
      'BSBHRM417 (Support human resource functions and processes), or equivalent competencies, as evidenced by a copy of your transcript',
      'or Equivalent competencies are predecessors to these units, which have been mapped as equivalent. Or',
      'Have two years equivalent full-time relevant work experience, as evidenced by a copy of your resume',
    ],
    listTwo: [
      'administrative assistant',
      'customer service representative',
      'receptionist',
      'general clerk',
    ],
  },
};
