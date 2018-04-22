import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Alert, Badge, ListGroup, ListGroupItem } from 'reactstrap';
import LZUTF8 from 'lzutf8';

import { SCENARIO_STATUS } from '../../constants';
import { Module } from '../../components/Module';
import { TextAreaField } from '../../components/Fields';
import * as Icon from '../../components/Icons';
import * as Dialog from './dialogs';
import connectConfig from './connect';
import formConfig from './form';
import './styles.css';

class Builder extends Component {
  state = { dialog: null };

  componentWillMount() {
    this.setBuild(this.props.formValues.build);
  }

  closeDialog = () => this.setState({ dialog: null });

  showDialog = dialog => event => this.setState({ dialog });

  setBuild = build => {
    const { change } = this.props;
    change('build', build);
    change('base64', LZUTF8.compress(JSON.stringify(build), { outputEncoding: 'Base64' }));
  };

  setBase64 = base64 => {
    const { change } = this.props;
    change('base64', base64);
    change('build', JSON.parse(LZUTF8.decompress(base64, { inputEncoding: 'Base64' })));
  };

  pasteBase64 = event => {
    try {
      const text = event.clipboardData.getData('Text').replace(/\s/g, '');
      this.setBase64(text);
    } catch (e) {
      alert('Error trying to parse build from clipboard.\n' + e.message);
    }
  };

  updateBuild = reduce => {
    const build = reduce(this.props.formValues.build);
    this.setBuild(build);
    this.closeDialog();
  };

  render() {
    const { formValues: { build } } = this.props;
    const { dialog: DialogComponent } = this.state;

    const dialog = DialogComponent && (
      <DialogComponent build={build} onClose={this.closeDialog} onSubmit={this.updateBuild} />
    );

    const players = build.players;
    const parties = build.parties;
    const classes = Object.values(build.classes).filter(v => v);
    const characters = build.characters;
    const cityEvents = build.cityEvents;
    const roadEvents = build.roadEvents;
    const scenarios = Object.values(build.scenarios).filter(v => v);
    const envelopes = Object.values(build.envelopes).filter(v => v);
    const items = build.items;
    const globalAchievements = Object.values(build.globalAchievements).filter(v => v);
    const partyAchievements = Object.values(build.partyAchievements).filter(v => v);

    return (
      <div className="col-12">
        {dialog}
        <Module open>
          <Module.Head>Campaign Builder</Module.Head>
          <Module.Body>
            <div className="row">
              <div className="col-12">
                <ul className="small">
                  <li>
                    Very little campaign validation is done using the builder. It is possible to create invalid
                    campaigns. If you break it, you buy it{' '}
                    <span role="img" aria-label="wink">
                      😜
                    </span>
                  </li>
                  <li>
                    More than 50% of personal quests cannot be automatically tracked on imported characters. Imported
                    characters with these quests will need to track their progress using the <code>Quest</code> &gt;{' '}
                    <code>Manual Progress&hellip;</code> option.
                  </li>
                  <li>
                    It is recommended to save the build code until you are sure you your campaign configured correctly.
                    You can reuse the code to quickly reconfigure later.
                  </li>
                </ul>
              </div>
              <div className="col-12 col-sm-6 col-lg-4 col-xl-4">
                <Alert color="info">Configure your build to generate a Gloomy campaign.</Alert>
                <ListGroup>
                  <ListGroupItem action tag="button" type="button" onClick={this.showDialog(Dialog.PlayersDialog)}>
                    <Icon.PlayerIcon /> Players{' '}
                    <Badge className="pull-right" color={players.length ? 'success' : 'warning'}>
                      {players.length}
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem action tag="button" type="button" onClick={this.showDialog(Dialog.PartiesDialog)}>
                    <Icon.PartyIcon /> Parties{' '}
                    <Badge className="pull-right" color={parties.length ? 'success' : 'warning'}>
                      {parties.length}
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem action tag="button" type="button" onClick={this.showDialog(Dialog.ClassesDialog)}>
                    <Icon.ClassIcon class="BR" /> Classes{' '}
                    <Badge className="pull-right" color="success">
                      {classes.length}
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem
                    action
                    tag="button"
                    type="button"
                    onClick={this.showDialog(Dialog.CharactersDialog)}
                    disabled={!players.length || !parties.length}
                  >
                    <i className="fa fa-fw fa-users" /> Characters{' '}
                    <Badge
                      className="pull-right"
                      color={
                        !players.length || !parties.length ? 'secondary' : characters.length ? 'success' : 'warning'
                      }
                    >
                      {characters.length}
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem action tag="button" type="button" onClick={this.showDialog(Dialog.CityEventsDialog)}>
                    <Icon.GloomhavenIcon /> City Events{' '}
                    <Badge className="pull-right" color="success">
                      {cityEvents.length}
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem action tag="button" type="button" onClick={this.showDialog(Dialog.RoadEventsDialog)}>
                    <Icon.MapIcon /> Road Events{' '}
                    <Badge className="pull-right" color="success">
                      {roadEvents.length}
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem action tag="button" type="button" onClick={this.showDialog(Dialog.ScenariosDialog)}>
                    <Icon.ScenarioIcon /> Scenarios{' '}
                    <Badge className="pull-right" color={scenarios.length ? 'success' : 'warning'}>
                      {scenarios.filter(s => s === SCENARIO_STATUS.COMPLETE).length}/{scenarios.length}
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem
                    action
                    tag="button"
                    type="button"
                    onClick={this.showDialog(Dialog.GlobalAchievementsDialog)}
                  >
                    <Icon.GlobalAchievementIcon /> Global Achievements{' '}
                    <Badge className="pull-right" color="success">
                      {globalAchievements.length}
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem
                    action
                    tag="button"
                    type="button"
                    onClick={this.showDialog(Dialog.PartyAchievementsDialog)}
                  >
                    <Icon.PartyAchievementIcon /> Party Achievements{' '}
                    <Badge className="pull-right" color="success">
                      {partyAchievements.length}
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem action tag="button" type="button" onClick={this.showDialog(Dialog.EnvelopesDialog)}>
                    <Icon.EnvelopeIcon /> Envelopes{' '}
                    <Badge className="pull-right" color="success">
                      {envelopes.length}
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem action tag="button" type="button" onClick={this.showDialog(Dialog.ItemsDialog)}>
                    <Icon.SlotIcon slot="Sm" /> Items{' '}
                    <Badge className="pull-right" color={items.length ? 'success' : 'warning'}>
                      {items.length}
                    </Badge>
                  </ListGroupItem>
                  <ListGroupItem action tag="button" type="button" onClick={this.showDialog(Dialog.DonationsDialog)}>
                    <Icon.SanctuaryIcon /> Sanctuary Donations{' '}
                    <Badge className="pull-right" color="success">
                      {build.donations}
                    </Badge>
                  </ListGroupItem>
                </ListGroup>
              </div>
              <div className="col-12 col-sm-6 col-lg-8 col-xl-8">
                <Alert color="info">
                  <li>Copy the configured build and enter it when creating a new Gloomy campaign.</li>
                  <li>Paste an existing build to modify it.</li>
                </Alert>
                <TextAreaField name="base64" label="Build:" onPaste={this.pasteBase64} rows="5" />
              </div>
            </div>
          </Module.Body>
        </Module>
      </div>
    );
  }
}

export default compose(connect(...connectConfig), reduxForm(formConfig))(Builder);
