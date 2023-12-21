import ButtonIcon from '../components/ButtonIcon.vue';

export default {
  title: 'Components/Button/Button Icon',
  component: ButtonIcon,
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
    label: 'Primary Button',
    selectedSvgName: 'find',
  },
};

export const Secondary = {
  args: {
    secondary: true,
    label: 'Secondary Button',
    selectedSvgName: 'empty',
  },
};

export const Light = {
  args: {
    light: true,
    label: 'Light Button',
    selectedSvgName: 'empty',
  },
};

export const Dark = {
  args: {
    dark: true,
    label: 'Dark Button',
    selectedSvgName: 'empty',
  },
};
