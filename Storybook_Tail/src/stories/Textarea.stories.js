import Textarea from '../components/Textarea.vue';

export default {
  title: 'Forms and Tables/Textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export const textarea = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
  },
};

export const error = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
    isInvalid: true,
    isInvalid: 'invalid',
    errorMessage: 'Inline error message.',
  },
};

export const example = {
  args: {
    label: 'Where do you see yourself in 5-10 years time?',
    placeholder: 'Start typing',
  },
};
