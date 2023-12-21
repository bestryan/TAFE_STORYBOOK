import Input from '../components/Input.vue';

export default {
  title: 'Forms and Tables/Input',
  component: Input,
  tags: ['autodocs'],
};

export const input = {
  args: {
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder text',
  },
};

export const password = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const error = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'email address',
    isInvalid: true,
    isInvalid: 'invalid',
    errorMessage: 'Inline error message.',
  },
};
