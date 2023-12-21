import HeroBannerF from '../components/HeroBannerF.vue';

export default {
  title: 'Components/Hero Banner/Banner F',
  component: HeroBannerF,
  tags: ['autodocs'],
};

export const variation_one = {
  args: {
    heading: 'Heading h2 Large',
    location: 'location',
    selectedSvgName: 'action',
    buttonLabel: 'Start enrolment',
    button_visible: true,
  },
};

export const variation_Two = {
  args: {
    location: 'Heading H2 Large',
    selectedSvgName: 'find',
    buttonLabel: 'Find a location to enrol',
    button_visible: false,
  },
};
