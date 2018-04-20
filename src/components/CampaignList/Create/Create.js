import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { Alert, Progress } from 'reactstrap';
import LZUTF8 from 'lzutf8';

import { ACTION, ACTION_CONFIG, ITEM_CONFIG } from '../../../constants';
import { TextField, TextAreaField } from '../../Fields';
import formConfig from './form';

class Create extends Component {
  state = { builder: false, progress: 0, step: '' };

  submit = async values => {
    const { appendCampaignAction, changeTab, createCampaign } = this.props;
    const build =
      this.state.builder && values.build && JSON.parse(LZUTF8.decompress(values.build, { inputEncoding: 'Base64' }));

    let curStep = 0;
    const totalSteps = (build && build.players.length + build.parties.length + build.characters.length + 3) || 2;
    const progress = () => this.setState({ progress: ++curStep / totalSteps });

    this.setState({ step: 'Creating Campaign', progress: ++curStep / totalSteps });
    let { data: campaign } = await createCampaign(values);
    progress();

    if (build) {
      // Players
      this.setState({ step: 'Creating Players' });
      for (let i = 0; i < build.players.length; i++) {
        const name = build.players[i];
        const action = ACTION_CONFIG[ACTION.PLAYER_CREATE].create({ name });
        const result = await appendCampaignAction({ id: campaign.id, action });
        campaign = result.campaign;
        build.players[i] = campaign.players[result.action.id];
        progress();
      }

      // Parties
      this.setState({ step: 'Creating Parties' });
      for (let i = 0; i < build.parties.length; i++) {
        const name = build.parties[i];
        const action = ACTION_CONFIG[ACTION.PARTY_CREATE].create({ name });
        const result = await appendCampaignAction({ id: campaign.id, action });
        campaign = result.campaign;
        build.parties[i] = campaign.parties[result.action.id];
        progress();
      }

      // Classes
      this.setState({ step: 'Updating Classes' });
      {
        const action = ACTION_CONFIG[ACTION.CAMPAIGN_PATCH].create({
          updates: [{ type: 'update', path: 'classes', value: build.classes }],
        });
        const result = await appendCampaignAction({ id: campaign.id, action });
        campaign = result.campaign;
        progress();
      }

      // Characters
      this.setState({ step: 'Creating Characters' });
      let charactersPatch = {};
      for (let i = 0; i < build.characters.length; i++) {
        const character = build.characters[i];
        // Create Character
        {
          const action = ACTION_CONFIG[ACTION.CHARACTER_CREATE].create({
            player: build.players[character.player].id,
            party: build.parties[character.party].id,
            name: character.name,
            level: character.level,
            class: character.class,
            quest: character.quest,
            imported: true,
          });
          const result = await appendCampaignAction({ id: campaign.id, action });
          campaign = result.campaign;
          build.characters[i] = campaign.characters[result.action.id];
        }

        if (character.retired) {
          // Retire Character
          const action = ACTION_CONFIG[ACTION.CHARACTER_RETIRE].create({ character: build.characters[i].id });
          const result = await appendCampaignAction({ id: campaign.id, action });
          campaign = result.campaign;
          build.characters[i] = campaign.characters[result.action.id];
        }

        if (character.bonusPerks) {
          const { id, maxPerks } = build.characters[i];
          charactersPatch[id] = maxPerks + character.bonusPerks;
        }

        progress();
      }

      // Patch the rest
      this.setState({ step: 'Wrapping Up' });
      {
        const { cityEvents, roadEvents, scenarios, envelopes, donations } = build;
        const action = ACTION_CONFIG[ACTION.CAMPAIGN_PATCH].create({
          updates: [
            {
              type: 'merge',
              value: {
                cityEvents: { top: cityEvents },
                roadEvents: { top: roadEvents },
                scenarios,
                envelopes: envelopes,
                items: build.items.reduce((obj, id) => ({ ...obj, [id]: ITEM_CONFIG[id].count }), {}),
                donations,
                characters: charactersPatch,
              },
            },
            { type: 'update', path: 'achievements', value: build.globalAchievements },
            ...build.parties.map(p => ({
              type: 'update',
              path: `parties.${p.id}.achievements`,
              value: build.partyAchievements,
            })),
          ],
        });
        const result = await appendCampaignAction({ id: campaign.id, action });
        campaign = result.campaign;
      }
    }

    this.setState({ progress: 0, step: '' });
    changeTab('current');
  };

  toggleBuilder = () => this.setState({ builder: !this.state.builder });

  render() {
    const { handleSubmit, submitting } = this.props;
    const { progress, step } = this.state;

    if (step) {
      return (
        <div>
          <h5>Please wait...</h5>
          <div className="text-center">{step}</div>
          <Progress color="success" value={progress} max={1}>
            {Math.round(progress * 100)}%
          </Progress>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <h5>Create New Campaign</h5>
        <TextField name="name" label="Name:" autoFocus />
        <div className="form-group">
          <label>
            <input type="checkbox" onClick={this.toggleBuilder} /> I have a{' '}
            <Link to="/builder">Gloomy Campaign Builder</Link> code
          </label>
        </div>
        {this.state.builder && (
          <div>
            <Alert color="warning small">
              <h4 className="alert-heading">Not recommended</h4>
              <hr />
              <b>Gloomy works best when starting from a blank campaign!</b>
              <br />
              If your campaign is too far advanced to allow this, you can use the{' '}
              <Link to="/builder">Gloomy Campaign Builder</Link> to generate a build code.<br />
            </Alert>
            <TextAreaField name="build" label="Build:" />
          </div>
        )}
        <button type="submit" className="btn btn-success" disabled={submitting}>
          Submit
        </button>
      </form>
    );
  }
}

Create.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
  createCampaign: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

Create.defaultProps = {};

export default reduxForm(formConfig)(Create);
