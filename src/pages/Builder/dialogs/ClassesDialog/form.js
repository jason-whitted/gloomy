import { CLASS_CONFIG } from '../../../../constants';
import { errors } from '../../../../common';

const form = 'campaign-builder-classes';

const initialValues = {
  classes: {},
};

const validate = ({ classes }) =>
  errors(
    Object.values(CLASS_CONFIG).reduce(
      (obj, val) =>
        !classes[val.id] || classes[val.id].unlocked || !classes[val.id].soloComplete
          ? obj
          : {
              ...obj,
              classes: {
                ...obj.classes,
                [val.id]: { soloComplete: 'Invalid' },
              },
            },
      {},
    ),
  );

export default {
  form,
  initialValues,
  validate,
};
