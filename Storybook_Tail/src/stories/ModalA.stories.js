import ModalA from '../components/ModalA.vue';

export default {
  title: 'Enrol Modals/Modal A',
  component: ModalA,
  tags: ['autodocs'],
};

export const Successful = {
  args: {
    lists: [
      {
        title: 'Date',
        content: '00/00/2023',
      },
      {
        title: 'Student',
        content: 'First Last',
      },
      {
        title: 'Course',
        content: 'Bachelor of Property Valuation',
      },
    ],
    items: [
      {
        title: 'Card holder',
        content: 'First Last',
      },
      {
        title: 'Company name',
        content: 'The Chocolate Factory',
      },
      {
        title: 'Payment type',
        content: 'Mastercard',
      },
      {
        title: 'Amount paid',
        content: '$31,440.00',
      },
      {
        title: 'Receipt number',
        content: 'HE20507V02',
      },
    ],
    content_one:
      'This transaction is still being processed. We are waiting for your bank to authorise payment from your nominated card.',
    content_two:
      'This may take up to 2 business days. You will be notified via email on the outcome of this transaction.',
    options: [{ label: 'Don’t show again', value: 'no' }],
  },
};
