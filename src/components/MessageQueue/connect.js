import { removeMessage, selectMessages } from '../../store/message';

const select = state => ({
  messages: selectMessages(state),
});

const boundActions = {
  removeMessage,
};

export default [select, boundActions];
