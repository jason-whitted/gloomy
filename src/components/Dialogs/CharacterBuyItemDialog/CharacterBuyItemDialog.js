import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG } from '../../../constants';
import { Convert } from '../../../common';
import { SelectField } from '../../Fields';
import { Item } from '../../Item';
import connectConfig from './connect';
import formConfig from './form';

class CharacterBuyItemDialog extends Component {
  componentWillMount() {
    const { character, change } = this.props;
    change('gold', character.gold);
    change('discount', Convert.reputationToShopPriceModifier(character.party.reputation));
  }

  submit = values => {
    const { appendCampaignAction, character } = this.props;
    const item = parseInt(values.item, 10);
    if (item) {
      const action = ACTION_CONFIG[ACTION.CHARACTER_BUY_ITEM].create({
        character: character.id,
        item,
      });
      appendCampaignAction({ action });
    }
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  render() {
    const { campaign, character, formValues, handleSubmit, submitting } = this.props;

    const available = character.party.items.filter(
      // eslint-disable-next-line eqeqeq
      item => item.available > 0 && !character.items.some(i => i.id == item.id),
    );

    // eslint-disable-next-line eqeqeq
    const item = campaign.items.find(i => i.id == formValues.item);

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Buy an Item</ModalHeader>
          <ModalBody>
            <SelectField name="item" label="Item:" autoFocus>
              <option value="" />
              {available.map(p => (
                <option key={p.id} value={p.id}>
                  {p.id} - {p.name}
                </option>
              ))}
            </SelectField>
            {item && <Item item={item} />}
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

CharacterBuyItemDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // connect
  formValues: PropTypes.object.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CharacterBuyItemDialog.defaultProps = {};

export default compose(connect(...connectConfig), reduxForm(formConfig))(CharacterBuyItemDialog);
