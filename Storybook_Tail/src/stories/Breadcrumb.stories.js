import Breadcrumb from '../components/Breadcrumb.vue';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};

export const Level_one = {
  args: {
    items: [{ label: 'Course Areas', path: '/courseareas' }],
  },
};

export const Level_two = {
  args: {
    items: [
      { label: 'Course Areas', path: '/courseareas' },
      { label: 'Healthcare', path: '/courseareas/healthcare' },
    ],
  },
};

export const Level_three = {
  args: {
    items: [
      { label: 'Course Areas', path: '/courseareas' },
      { label: 'Healthcare', path: '/courseareas/healthcare' },
      { label: 'Nursing', path: '/courseareas/healthcare/nursing' },
    ],
  },
};

export const Level_four = {
  args: {
    items: [
      { label: 'Course Areas', path: '/courseareas' },
      { label: 'Healthcare', path: '/courseareas/healthcare' },
      { label: 'Nursing', path: '/courseareas/healthcare/nursing' },
      {
        label: 'Diploma of Nursing',
        path: '/courseareas/healthcare/nursing/dp',
      },
    ],
  },
};
