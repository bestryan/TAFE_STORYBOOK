import ButtonStacked from '../components/ButtonStacked.vue';

export default {
  title: 'Components/Button/Button Stacked',
  component: ButtonStacked,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
    selectedSvgName: {
      options: ['empty', 'find'],
      control: { type: 'radio' },
    },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
    selectedSvgName: 'empty',
  },
};

export const find = {
  args: {
    primary: true,
    label: 'Button',
    selectedSvgName: 'find',
  },
};
