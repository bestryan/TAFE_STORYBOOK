import AtttributeTile from '../components/AttributeTile.vue';

export default {
  title: 'Components/Attribute Card/Attribute Offerings Card',
  component: AtttributeTile,
  tags: ['autodocs'],
};

/** An example course offering at Kingscliff - Enrollment is open */
export const Example_one = {
  args: {
    type: 'green',
    label: 'Enrolment open',
    location: 'Kingscliff',
    code: '23KCL-051',
    selectedSvgName: 'feeRange',
    content: '$0 - $7,790',
  },
};

/** An example course offering at Wollongbar - Register your interest */
export const Example_two = {
  args: {
    type: 'pink',
    label: 'Register interest',
    location: 'Wollongbar',
    code: '23WLB-050',
    selectedSvgName: 'feePending',
    content: 'Pending',
  },
};
