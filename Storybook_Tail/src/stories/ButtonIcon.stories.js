import ButtonIcon from '../components/ButtonIcon.vue';

export default {
  title: 'Components/Button/Button Icon',
  component: ButtonIcon,
  tags: ['autodocs'],
  argTypes: {
    onClick: {},
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    secondary: true,
    label: 'Secondary Button',
  },
};

export const Light = {
  args: {
    light: true,
    label: 'Light Button',
  },
};

export const Dark = {
  args: {
    dark: true,
    label: 'Dark Button',
  },
};
