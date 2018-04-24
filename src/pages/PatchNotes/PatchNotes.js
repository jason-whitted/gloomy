import React from 'react';
import { Link } from 'react-router-dom';

import { BugIcon, ClassIcon, StarIcon } from '../../components/Icons';
import Issue from './Issue';

export default () => (
  <div className="col-12">
    <h5>Version 0.1.9</h5>
    <ul>
      <li>
        <StarIcon /> New Feature: Suggested Level calculator available via <code>Scenario</code> &gt;{' '}
        <code>Suggested Level&hellip;</code> <Issue number="26" />
      </li>
      <li>
        <StarIcon /> New Feature: Item cards now show discounted price in the Buy Item dialog <Issue number="20" />
      </li>
      <li>
        <StarIcon /> New Feature: Item cards now display their negative item effects <Issue number="19" />
      </li>
      <li>
        <BugIcon /> Bug Fix: Buy Item dialog was not fully respecting reputation discounts <Issue number="13" />
      </li>
      <li>
        <BugIcon /> Bug Fix: Delete History (Undo) was not working <Issue number="14" /> <Issue number="17" />
      </li>
      <li>
        <BugIcon /> Bug Fix: Quest 520 was not properly tracking <Issue number="15" />
      </li>
      <li>
        <BugIcon /> Bug Fix: Road event should not be required when traveling from Gloomhaven to scenarios linked to
        Gloomhaven <Issue number="16" />
      </li>
      <li>
        <BugIcon /> Bug Fix: Augments are now tied to the campaign (not a character) <Issue number="18" />
      </li>
      <li>
        <BugIcon /> Bug Fix: <ClassIcon class="NS" /> cards 263, 269, and 287 were incorrect <Issue number="21" />
      </li>
      <li>
        <BugIcon /> Bug Fix: Campaign builder: Retired characters with bonus perks would break import{' '}
        <Issue number="22" />
      </li>
      <li>
        <BugIcon /> Bug Fix: Campaign Builder: Item dialog would not remember previous selections <Issue number="23" />
      </li>
    </ul>
    <h5>Version 0.1.8</h5>
    <ul>
      <li>
        <StarIcon /> New Feature: Add perks directly from the Perk list <Issue number="8" />
      </li>
      <li>
        <BugIcon /> Bug Fix: Items are available to a party after importing <Issue number="7" />
      </li>
      <li>
        <BugIcon /> Bug Fix: Traveling to scenarios requiring Bravery now works <Issue number="9" />
      </li>
      <li>
        <BugIcon /> Bug Fix: Quest tracking exhaustion now increments properly <Issue number="11" />
      </li>
    </ul>
    <h5>Version 0.1.7</h5>
    <ul>
      <li>
        <BugIcon />
        Bug Fix: Updated Prosperity points to 2nd printing values
      </li>
    </ul>
    <h5>Version 0.1.6</h5>
    <ul>
      <li>
        <BugIcon />
        Bug Fix: Most items available in item receive/unlock dialogs
      </li>
    </ul>
    <h5>Version 0.1.5</h5>
    <ul>
      <li>
        <StarIcon /> New Feature: <Link to="/builder">Campaign Builder</Link>
      </li>
    </ul>
    <h4>Version 0.1.4</h4>
    <ul>
      <li>
        <BugIcon />
        Bug Fix: Disable scenario reward dialogs on failed campaign scenarios (<Issue number="3" />)
      </li>
      <li>
        <BugIcon />
        Bug Fix: Allow Sanctuary Donations after failed campaign scenarios (<Issue number="4" />)
      </li>
    </ul>
    <h4>Version 0.1.3</h4>
    <ul>
      <li>
        <BugIcon />
        Bug Fix: Road events were not being properly triggered (<Issue number="1" />)
      </li>
      <li>
        <BugIcon />
        Bug Fix: Some items were incorrectly being excluded from the receive/unlock item dialogs (<Issue number="2" />)
      </li>
    </ul>
  </div>
);
