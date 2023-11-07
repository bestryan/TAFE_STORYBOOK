import Accordion from '../components/Accordion.vue';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

/** Only one section can be open at the time */
export const Single_Accordion = {
  args: {
    items: [
      {
        title: 'Title #1',
        content: 'This is the contents for Accordion item #1',
      },
    ],
  },
};

/** Each section can be expanded without closing the others */
export const Multi_Accordion = {
  args: {
    items: [
      {
        title: 'Title #1',
        content: 'This is the contents for Accordion item #1',
      },
      {
        title: 'Title #2',
        content: 'This is the contents for Accordion item #2',
      },
      {
        title: 'Title #3',
        content: 'This is the contents for Accordion item #3',
      },
    ],
  },
};

/** Each section can be expanded without closing the others with subtitle */
export const variation_with_subtitle = {
  args: {
    items: [
      {
        title: 'Title #1',
        courseCode: 'Subtitle #1',
        content: 'This is the contents for Accordion item #1',
      },
      {
        title: 'Title #2',
        courseCode: 'Subtitle #2',
        content: 'This is the contents for Accordion item #2',
      },
      {
        title: 'Title #3',
        courseCode: 'Subtitle #3',
        content: 'This is the contents for Accordion item #3',
      },
    ],
  },
};

export const example_Subjects = {
  args: {
    items: [
      {
        title: 'Manage personal stressors in the work environment',
        courseCode: 'HLTWHS006',
        content:
          'This unit describes the skills and knowledge required to maintain health and wellbeing by preventing and managing personal stress. This unit applies to work in a range of health and community services settings, in particular work roles that operate in high stress situations and circumstances. ',
        locationTitle: 'Offered at 3 locations: ',
        location: 'Ultimo, Orange, St Leonards',
      },
      {
        title: 'Follow safe work practices for direct client care',
        courseCode: 'HLTWHS002',
        content:
          'This unit describes the skills and knowledge required for a worker to participate in safe work practices to ensure their own health and safety, and that of others in work environments that involve caring directly for clients. It has a focus on maintaining safety of the worker, the people being supported and other community members',
        locationTitle: 'Offered at 2 locations: ',
        location: 'Ultimo, St Leonards',
      },
      {
        title: 'Confirm physical health status',
        courseCode: 'HLTAAP002',
        content:
          'This unit describes the skills and knowledge required to obtain and interpret information about client health status and to check a client’s physical health. It requires a detailed knowledge of anatomy and physiology. It applies to individuals working directly with clients and who assist in the provision of health care services. Some disciplines may be subject to state/territory regulatory determination regarding delegation and supervision.',
        locationTitle: 'Offered at 3 locations: ',
        location: 'Ultimo, Orange, St Leonards',
      },
    ],
  },
};
