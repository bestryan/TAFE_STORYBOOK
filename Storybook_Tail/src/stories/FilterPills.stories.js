import FilterPills from '../components/FilterPills.vue';

export default {
  title: 'Components/Pills/Filter Pill',
  component: FilterPills,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['select', 'clear'],
      control: { type: 'radio' },
    },
  },
};

export const Select = {
  args: {
    type: 'select',
    label: 'Full-time',
  },
};

export const Clear = {
  args: {
    type: 'clear',
    label: 'Clear all',
  },
};

export const Icon = {
  args: {
    type: 'icon',
  },
};
