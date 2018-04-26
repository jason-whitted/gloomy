import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

const events = () => ({
  top: new Array(30).fill(0).map((_, i) => i + 1),
  bottom: [],
});

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { gist: { 1: 2 }, history: [3] } };
      const actual = ACTION.create({ gist: { 1: 2 }, history: [3] });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should create a campaign', () => {
      const campaign = {};
      const expected = {
        id: 1,
        name: 'Bob',
        dt: 'dt',
        by: 'by',
        owner: 'by',
        contributors: [],
        permissions: '0000',
        history: [2],
        achievements: { 8: 1 },
        characters: {},
        cityEvents: events(),
        classes: { BR: true, CH: true, MT: true, SC: true, SW: true, TI: true },
        augments: {},
        donations: 0,
        envelopes: {},
        items: { 1: 2, 2: 2, 3: 2, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 12: 4, 13: 4, 14: 4 },
        parties: {},
        reputationBounds: { min: 0, max: 0 },
        players: {},
        prosperity: 0,
        roadEvents: events(),
        scenarios: {},
        notes: '',
      };
      const action = ACTION.create({
        gist: { id: 1, description: 'Bob', created_at: 'dt', owner: { login: 'by' } },
        history: [2],
      });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});
