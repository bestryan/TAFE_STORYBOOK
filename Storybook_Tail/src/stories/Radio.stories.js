import Radio from '../components/Radio.vue';

export default {
  title: 'Forms and Tables/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      options: ['row', 'col'],
      control: { type: 'radio' },
    },
  },
};

export const radio = {
  args: {
    title: 'Label',
    options: [
      { label: 'Value 1', value: 'option1' },
      { label: 'Value 2', value: 'option2' },
      { label: 'Value 3', value: 'option3' },
    ],
    name: 'groupName',
    direction: 'col',
  },
};

export const Example = {
  args: {
    title: '* Preferred contact method',
    options: [
      { label: 'Email', value: 'option1' },
      { label: 'Mobile phone', value: 'option2' },
      { label: 'Home phone', value: 'option3' },
    ],
    name: 'contact',
    direction: 'col',
  },
};
