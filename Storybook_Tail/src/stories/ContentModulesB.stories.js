import ContentModulesB from '../components/ContentModulesB.vue';

export default {
  title: 'Content Modules/List with Image',
  component: ContentModulesB,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['right', 'left'],
      control: { type: 'radio' },
    },
  },
};

export const Content_Left = {
  args: {
    overview: 'Overview',
    title: 'Heading 3 large',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    isNumbered: false,
    button_visible: true,
  },
};

export const Content_Right = {
  args: {
    type: 'right',
    overview: 'Overview',
    title: 'Heading 3 large',
    content:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'],
    isNumbered: false,
    button_visible: true,
  },
};
