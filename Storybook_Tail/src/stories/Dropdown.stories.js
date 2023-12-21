import Dropdown from '../components/Dropdown.vue';

export default {
  title: 'Forms and Tables/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export const dropdown = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
      { label: 'Option 4', value: 'option4' },
    ],
  },
};

export const example = {
  args: {
    options: [
      { label: 'Ultimo', value: 'option1' },
      { label: 'St George', value: 'option2' },
      { label: 'Rankwick', value: 'option3' },
      { label: 'Liverpool', value: 'option4' },
    ],
  },
};
