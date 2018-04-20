import ACTION from './';

const mockGithub = entry => ({ ...entry, id: 1, dt: 'dt', by: 'by' });

describe(ACTION.name, () => {
  describe('create', () => {
    it('should create a history entry', () => {
      const expected = { action: ACTION.id, payload: { updates: [1, 2, 3] } };
      const actual = ACTION.create({ updates: [1, 2, 3] });
      expect(actual).toEqual(expected);
    });
  });

  describe('reduce', () => {
    it('should update', () => {
      const campaign = {
        a1: {
          b1: {
            c1: 123,
            c2: 456,
          },
          b2: 'asdf',
        },
        a2: 'qwerty',
      };
      const expected = {
        a1: {
          b1: {
            c1: 789,
            c2: 456,
          },
          b2: 'asdf',
        },
        a2: 'qwerty',
      };
      const action = ACTION.create({ updates: [{ type: 'set', path: ['a1', 'b1', 'c1'], value: 789 }] });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should delete', () => {
      const campaign = {
        a1: {
          b1: {
            c1: 123,
            c2: 456,
          },
          b2: 'asdf',
        },
        a2: 'qwerty',
      };
      const expected = {
        a1: {
          b1: {
            c1: undefined,
            c2: 456,
          },
          b2: 'asdf',
        },
        a2: 'qwerty',
      };
      const action = ACTION.create({ updates: [{ type: 'set', path: 'a1.b1[c1]' }] });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should merge without path', () => {
      const campaign = {
        a1: {
          b1: {
            c1: 123,
            c2: 456,
          },
          b2: 'asdf',
        },
        a2: 'qwerty',
      };
      const expected = {
        a1: {
          b1: {
            c1: 'o.O',
            c2: 456,
            c3: 123,
          },
          b2: 'asdf',
        },
        a2: 'qwerty',
      };
      const action = ACTION.create({
        updates: [
          {
            type: 'merge',
            value: {
              a1: {
                b1: {
                  c1: 'o.O',
                  c3: 123,
                },
              },
            },
          },
        ],
      });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });

    it('should merge with path', () => {
      const campaign = {
        a1: {
          b1: {
            c1: 123,
            c2: 456,
          },
          b2: 'asdf',
        },
        a2: 'qwerty',
      };
      const expected = {
        a1: {
          b1: {
            c1: 'o.O',
            c2: 456,
            c3: 123,
          },
          b2: 'asdf',
        },
        a2: 'qwerty',
      };
      const action = ACTION.create({
        updates: [
          {
            type: 'merge',
            path: ['a1', 'b1'],
            value: {
              c1: 'o.O',
              c3: 123,
            },
          },
        ],
      });
      const actual = ACTION.reduce(campaign, mockGithub(action));
      expect(actual).toEqual(expected);
    });
  });
});
