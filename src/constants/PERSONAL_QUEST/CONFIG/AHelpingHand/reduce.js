export default campaign => (state, action) => {
  let character = state;

  if (!character.retirement.ignored) {
    character = {
      ...character,
      retirement: {
        ...character.retirement,
        ignored: Object.values(campaign.characters)
          .filter(c => c.retirement.complete)
          .map(c => c.id),
      },
    };
  }

  const characters = Object.values(campaign.characters)
    .filter(c => c.retirement.complete && !character.retirement.ignored.includes(c.id))
    .map(c => c.id);
  const current = Math.min(characters.length, 2);
  return {
    ...character,
    retirement: {
      ...character.retirement,
      complete: current === 2,
      progress: current / 2,
      characters,
    },
  };
};
