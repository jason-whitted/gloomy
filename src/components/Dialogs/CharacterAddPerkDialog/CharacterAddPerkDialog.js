import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { SelectField } from '../../Fields';
import formConfig from './form';

class CharacterAddPerkDialog extends Component {
  submit = values => {
    const { appendCampaignAction, character } = this.props;
    const perk = parseInt(values.perk, 10);
    if (perk) {
      const action = ACTION_CONFIG[ACTION.CHARACTER_ADD_PERK].create({
        character: character.id,
        perk,
      });
      appendCampaignAction({ action });
    }
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { character, handleSubmit, submitting } = this.props;

    const perks = character.class.perks.reduce((dict, perk) => {
      if (!dict[perk.id]) {
        dict[perk.id] = {
          ...perk,
          count: 0,
          checks: character.perks.filter(p => p.id === perk.id).length,
        };
      }
      dict[perk.id].count++;
      return dict;
    }, {});
    const perkIndex = ({ id }) => character.class.perks.findIndex(p => p.id === id);
    const sortPerks = (a, b) => perkIndex(a) - perkIndex(b);

    const available = Object.values(perks)
      .sort(sortPerks)
      .filter(p => p.count > p.checks);

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Choose a Perk</ModalHeader>
          <ModalBody>
            <SelectField name="perk" label="Perk:" autoFocus>
              <option value="" />
              {available.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </SelectField>
          </ModalBody>
          <ModalFooter>
            <Button color="success" disabled={submitting}>
              Submit
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    );
  }
}

CharacterAddPerkDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CharacterAddPerkDialog.defaultProps = {};

export default reduxForm(formConfig)(CharacterAddPerkDialog);
