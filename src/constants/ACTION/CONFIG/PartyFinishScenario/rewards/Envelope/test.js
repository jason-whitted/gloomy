import { Envelope } from './';

describe('ScenarioEnvelopes', () => {
  it('should update the envelopes', () => {
    const campaign = {
      envelopes: {},
    };
    const expected = {
      envelopes: { x: true },
    };
    const actual = Envelope(campaign, { envelope: 'x' });
    expect(actual).toEqual(expected);
  });
});
