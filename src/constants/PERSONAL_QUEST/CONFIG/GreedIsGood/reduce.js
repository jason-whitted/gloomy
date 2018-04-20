import manualQuestProgress from '../manualQuestProgress';

export default campaign => (character, action) => {
  // NOTE: This WOULD be ok, but a player could give themselves 200 starting gold after importing to buy their items
  // and then it would immediately complete, even though they may have never had 200g on hand.

  if (character.imported) return manualQuestProgress(campaign)(character, action);

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
