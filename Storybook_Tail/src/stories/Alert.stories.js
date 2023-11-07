import Alert from '../components/Alert.vue';

export default {
  title: 'Components/Alert/In-page Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['information', 'success', 'error'],
      control: { type: 'radio' },
    },
  },
};

/** 
<ul>
  <li>use for information the user should know, but is not critical</li>
  <li>use for tips or information which the user can benefit from</li>
  <li>use for messages which don't require too much attention or action</li>
  <li>don't use in response to a user action</li>
</ul>



*/
export const Information_alert = {
  args: {
    type: 'information',
    title: 'Instruction to aid progress/ provide confidence',
    message:
      'Further explanation if required with next steps for user to action or seek assistance with',
    link: 'links if available',
  },
};

/** 
<ul>
  <li>use to inform the user that an action was performed successfully (e.g. submitting a form or registering an account).
  </li>
</ul> */
export const Success_alert = {
  args: {
    type: 'success',
    title: 'Confirmation of successful action',
    message:
      'Further explanation if required with next steps for user to action with',
    link: 'links if available',
  },
};

/** 
<ul>
  <li>use where a system event has failed</li>
  <li>use when the user has made an error</li>
  <li>use where the user is blocked until the issue is resolved, or the issue needs resolving immediately</li>
  <li>provide sufficient information on the issue and resolution to fix the issue</li>
  <li>don't use for validation or validation summary.</li>
</ul> 

*/
export const Error_alert = {
  args: {
    type: 'error',
    title: 'Reason for hard stop',
    message:
      'Further explanation if required with next steps for user to action or seek assistance with',
    link: 'links if available',
  },
};
