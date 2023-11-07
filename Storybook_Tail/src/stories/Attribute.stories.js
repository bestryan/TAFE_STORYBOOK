import Atttribute from '../components/Attribute.vue';

export default {
  title: 'Components/Attribute',
  component: Atttribute,
  tags: ['autodocs'],
  argTypes: {
    selectedSvgName: {
      options: ['schedule', 'onCampus'],
      control: { type: 'radio' },
    },
  },
};

/** This is used for schedule attribute */
export const Schedule = {
  args: {
    tooltip: 'Pace and number of hours.',
    title: 'Schedule',
    content: 'Full Time',
    selectedSvgName: 'schedule',
  },
};
/** This is used for duration attribute */
export const Duration = {
  args: {
    tooltip: 'Total time required to complete a course.',
    content: '6 months',
    title: 'Duration',
    selectedSvgName: 'duration',
  },
};
/** This is used for fee range attribute */
export const Fee_range = {
  args: {
    tooltip:
      'This is an indicative fee. The course fee depends on the subjects you choose to study.',
    title: 'Fee Range',
    content: '$75',
    selectedSvgName: 'feeRange',
  },
};
