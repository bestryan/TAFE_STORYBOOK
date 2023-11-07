import Tabs from '../components/Tabs.vue';

export default {
  title: 'Components/Tab/Default Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export const Default_Tabs = {
  args: {
    tabs: [
      { name: 'One', content: 'Content for Tab One' },
      { name: 'Two', content: 'Content for Tab Two' },
      { name: 'Three', content: 'Content for Tab Three' },
      { name: 'Four', content: 'Content for Tab Four' },
      { name: 'Five', content: 'Content for Tab Five' },
      { name: 'Six', content: 'Content for Tab Six' },
    ],
  },
};
