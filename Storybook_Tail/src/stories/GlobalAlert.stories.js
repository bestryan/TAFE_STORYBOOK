import GlobalAlert from '../components/GlobalAlert.vue';

export default {
  title: 'Components/Alert/Global Alert',
  component: GlobalAlert,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
  },
};

export const Global_Alert = {
  args: {
    message:
      'Further explanation if required with next steps for user to action or seek assistance with',
  },
};

export const example = {
  args: {
    message:
      'Our enrolment and student portal is undergoing an important upgrade and will be unavailable from Thursday 26th Oct 2023 at 6:00 pm until Saturday 28th Oct 2023 6:00 pm',
  },
};
