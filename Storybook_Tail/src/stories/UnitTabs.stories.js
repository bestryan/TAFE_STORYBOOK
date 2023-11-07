import UnitTabs from '../components/UnitTabs.vue';

export default {
  title: 'Components/Tab/Unit Tabs',
  component: UnitTabs,
  tags: ['autodocs'],
};

export const Unit_Tabs = {
  args: {
    tabs: [
      { name: 'Core units', content: 'content for Core units', units: 11 },
      {
        name: 'Specialty units',
        content: 'content for Specialty units',
        units: 21,
      },
    ],
  },
};
