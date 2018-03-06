import CLASS from '../CLASS/ID';

const TYPE = {
  STANDARD: undefined,
  SCENARIO: 'Scenario',
  // [CLASS.ID]: 'ClassID',
};
Object.keys(CLASS).forEach(k => (TYPE[k] = `Class${k}`));

export default TYPE;
