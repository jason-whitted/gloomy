import ID from './ID';

const VISIBLE = { value: '0', name: 'Visible' };
const SPOILER = { value: '1', name: 'Spoiler' };
const HIDDEN = { value: '2', name: 'Hidden' };

export default {
  [ID.VISIBILITY]: {
    id: ID.VISIBILITY,
    name: 'Visibility',
    values: {
      [VISIBLE.value]: VISIBLE,
      [SPOILER.value]: SPOILER,
      [HIDDEN.value]: HIDDEN,
    },
  },
};
