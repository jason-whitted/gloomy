export default campaign => (character, action) => {
  const current = Math.min(character.gold, 200);
  const progress = current / 200;
  if (progress !== character.retirement.progress) {
    return {
      ...character,
      retirement: {
        complete: current === 200,
        progress,
      },
    };
  }
  return character;
};
