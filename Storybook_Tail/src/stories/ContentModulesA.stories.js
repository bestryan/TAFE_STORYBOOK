import ContentModulesA from '../components/ContentModulesA.vue';

export default {
  title: 'Content Modules/Content with Image',
  component: ContentModulesA,
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
    content_one:
      'Pursue a career as a highly regarded property valuer and combine your business skills, networking ability and keen eye for detail to manage diverse property valuation matters.',
    content_two:
      'The TAFE NSW Bachelor of Property Valuation is the only specialist valuation degree in Australia. As a graduate, you will have the skills required to work in the property valuation industry across residential, commercial and other specialist areas.',
    button_visible: true,
  },
};

export const Content_Right = {
  args: {
    type: 'right',
    overview: 'Overview',
    title: 'Heading 3 large',
    content_one:
      'Pursue a career as a highly regarded property valuer and combine your business skills, networking ability and keen eye for detail to manage diverse property valuation matters.',
    content_two:
      'The TAFE NSW Bachelor of Property Valuation is the only specialist valuation degree in Australia. As a graduate, you will have the skills required to work in the property valuation industry across residential, commercial and other specialist areas.',
    button_visible: true,
  },
};
