import Table from '../components/Table.vue';

export default {
  title: 'Forms and Tables/Table',
  component: Table,
  tags: ['autodocs'],
};

export const Default_Table = {
  args: {
    headers: ['Course title', 'Location', 'Duration', 'Fees'],
    courses: [
      {
        title: 'Lorem ipsum dolor sit amet',
        location: 'Ultimo',
        duration: '6 months',
        fee: '$0-$3,000',
      },
      {
        title: 'Donec ac hendrerit velit',
        location: 'Wollongong West',
        duration: '12 months',
        fee: '$0-$6,000',
      },
      {
        title: 'Nullam nex orci ut ipsum feugiat interdum',
        location: 'Nowra',
        duration: '3 months',
        fee: '$0-$1,230',
      },
    ],
  },
};

export const Table_Striped = {
  args: {
    striped: true,
    headers: ['Course title', 'Location', 'Duration', 'Fees'],
    courses: [
      {
        title: 'Lorem ipsum dolor sit amet',
        location: 'Ultimo',
        duration: '6 months',
        fee: '$0-$3,000',
      },
      {
        title: 'Donec ac hendrerit velit',
        location: 'Wollongong West',
        duration: '12 months',
        fee: '$0-$6,000',
      },
      {
        title: 'Nullam nex orci ut ipsum feugiat interdum',
        location: 'Nowra',
        duration: '3 months',
        fee: '$0-$1,230',
      },
    ],
  },
};
