export default campaign => (character, action) => {
  const current = Math.min(character.checks, 15);
  const progress = current / 15;
  if (progress !== character.retirement.progress) {
    return {
      ...character,
      retirement: {
        complete: current === 15,
        progress,
      },
    };
  }
  return character;
};
