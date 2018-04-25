import { errors } from '../../../common';

const form = 'campaign-contributors';

const initialValues = {
  contributorCount: 0,
  contributors: [],
};

const validate = ({ contributorCount, contributors }) =>
  errors({
    contributorCount: !contributorCount ? 'Required' : isNaN(contributorCount) ? 'Invalid' : '',
    contributors: contributors.slice(0, contributorCount).map(p => (!p ? 'Required' : '')),
  });

export default {
  form,
  initialValues,
  validate,
};
