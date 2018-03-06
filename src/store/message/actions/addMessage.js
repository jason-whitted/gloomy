import * as CONST from '../constants';
import { selectMessages } from '../selectors';
import removeMessage from './removeMessage';

let prev = 0;

export default ({ type = 'alert-danger', title, text, autoClose = true, autoCloseDuration = 10000 }) => (
  dispatch,
  getState,
) => {
  const messages = selectMessages(getState());
  if (messages.some(m => m.text === text)) return Promise.resolve();

  const addMessage = async () => {
    const id = ++prev;
    await dispatch({
      type: CONST.MESSAGE_ADD,
      payload: { id, type, title, text },
    });

    if (autoClose) {
      setTimeout(() => {
        dispatch(removeMessage({ id }));
      }, autoCloseDuration);
    }
  };

  return addMessage().catch(error => {
    console.error(error);
  });
};
