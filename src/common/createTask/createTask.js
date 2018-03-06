import { store } from '../../store';
import { addMessage } from '../../store/message/actions';

export default ({ errorTitle = '' } = {}) => fn =>
  fn().catch(error => {
    console.error(error);
    store.dispatch(addMessage({ title: errorTitle, text: error.message }));
    throw error;
  });
