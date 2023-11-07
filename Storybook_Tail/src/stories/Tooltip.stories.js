import Tooltip from '../components/Tooltip.vue';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export const Short = {
  args: {
    tooltip: 'This is the tooltip content',
  },
};

export const Long = {
  args: {
    tooltip:
      'Nationally Recognised qualifications are recognised by all employers in Australia – no matter where they are. It guarantees the qualification on your resume is quality-assured and well regarded by the industry.',
  },
};
