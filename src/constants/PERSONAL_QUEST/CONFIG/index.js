import * as Diff from 'deep-object-diff';
import ID from '../ID';

import AberrantSlayer from './AberrantSlayer';
import AugmentedAbilities from './AugmentedAbilities';
import ElementalSamples from './ElementalSamples';
import MerchantClass from './MerchantClass';
import PietyInAllThings from './PietyInAllThings';
import SeekerOfXorn from './SeekerOfXorn';
import TheThinPlaces from './TheThinPlaces';
import GreedIsGood from './GreedIsGood';
import FindingTheCure from './FindingTheCure';
import AStudyOfAnatomy from './AStudyOfAnatomy';
import ZealotOfTheBloodGod from './ZealotOfTheBloodGod';
import BattleLegend from './BattleLegend';
import Lawbringer from './Lawbringer';
import PoundsOfFlesh from './PoundsOfFlesh';
import TrophyHunt from './TrophyHunt';
import EternalWanderer from './EternalWanderer';
import ImplementOfLight from './ImplementOfLight';
import TakeBackTheTrees from './TakeBackTheTrees';
import FearlessStand from './FearlessStand';
import Vengeance from './Vengeance';
import GoliathToppler from './GoliathToppler';
import TheFallOfMan from './TheFallOfMan';
import ThePerfectPoison from './ThePerfectPoison';
import AHelpingHand from './AHelpingHand';

const config = {
  [ID.ABERRANT_SLAYER]: AberrantSlayer,
  [ID.AUGMENTED_ABILITIES]: AugmentedAbilities,
  [ID.ELEMENTAL_SAMPLES]: ElementalSamples,
  [ID.MERCHANT_CLASS]: MerchantClass,
  [ID.PIETY_IN_ALL_THINGS]: PietyInAllThings,
  [ID.SEEKER_OF_XORN]: SeekerOfXorn,
  [ID.THE_THIN_PLACES]: TheThinPlaces,
  [ID.GREED_IS_GOOD]: GreedIsGood,
  [ID.FINDING_THE_CURE]: FindingTheCure,
  [ID.A_STUDY_OF_ANATOMY]: AStudyOfAnatomy,
  [ID.ZEALOT_OF_THE_BLOOD_GOD]: ZealotOfTheBloodGod,
  [ID.BATTLE_LEGEND]: BattleLegend,
  [ID.LAWBRINGER]: Lawbringer,
  [ID.POUNDS_OF_FLESH]: PoundsOfFlesh,
  [ID.TROPHY_HUNT]: TrophyHunt,
  [ID.ETERNAL_WANDERER]: EternalWanderer,
  [ID.IMPLEMENT_OF_LIGHT]: ImplementOfLight,
  [ID.TAKE_BACK_THE_TREES]: TakeBackTheTrees,
  [ID.FEARLESS_STAND]: FearlessStand,
  [ID.VENGEANCE]: Vengeance,
  [ID.GOLIATH_TOPPLER]: GoliathToppler,
  [ID.THE_FALL_OF_MAN]: TheFallOfMan,
  [ID.THE_PERFECT_POISON]: ThePerfectPoison,
  [ID.A_HELPING_HAND]: AHelpingHand,
};

Object.defineProperty(config, 'reduce', {
  enumerable: false,
  value(campaign, action) {
    // Let each non-retired character run their personal quest's reducer against this action
    const characters = Object.entries(campaign.characters).reduce((obj, [key, original]) => {
      if (original.retired || original.retirement.complete) return obj;
      const initial = config[original.quest].reduce(campaign)(original, action);
      const updated = initial instanceof Function ? initial(campaign) : initial;
      return updated === original
        ? obj
        : {
            ...obj,
            [key]: updated,
          };
    }, campaign.characters);

    const result =
      characters === campaign.characters
        ? campaign
        : {
            ...campaign,
            characters,
          };

    if (process.env.NODE_ENV === 'development' && result !== campaign) {
      console.groupCollapsed('reduce', 'quest', action.action);
      console.log('diff', Diff.detailedDiff(campaign, result));
      console.log('before', campaign);
      console.log('after', result);
      console.log('action', action);
      console.groupEnd();
    }

    return result;
  },
});

export default config;
