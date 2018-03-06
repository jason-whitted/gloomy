import { errors } from '../../../../common';

export default character => {
  const form = `character[${character.id}]`;
  const initialValues = {
    attended: 'yes',
    xp: '',
    gold: '',
    checks: '',
  };
  const validate = ({ completed, xp, gold, checks }) =>
    errors({
      xp: !xp ? '' : isNaN(xp) ? 'Invalid' : '',
      gold: !gold ? '' : isNaN(gold) ? 'Invalid' : '',
      checks: !completed || !checks ? '' : isNaN(checks) ? 'Invalid' : '',
    });

  return {
    form,
    initialValues,
    validate,
  };
};
