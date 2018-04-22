import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ACTION, ACTION_CONFIG, ITEM_CONFIG, ITEM_TYPE } from '../../../constants';
import { TextField } from '../../Fields';
import { Item } from '../../Item';
import connectConfig from './connect';
import formConfig from './form';

class CharacterReceiveItemDialog extends Component {
  state = { items: [] };

  componentWillMount() {
    const { campaign, character } = this.props;
    const items = Object.values(ITEM_CONFIG).filter(
      item =>
        (item.type === ITEM_TYPE.PROSPERITY || item.type === ITEM_TYPE.RANDOM || item.type === ITEM_TYPE.OTHER) &&
        (!campaign.items[item.id] || (!!character.party.items[item.id] && !character.items[item.id])),
    );
    this.setState({ items });
  }

  submit = values => {
    const { appendCampaignAction, character } = this.props;
    const item = parseInt(values.item, 10);
    if (item) {
      const action = ACTION_CONFIG[ACTION.CHARACTER_RECEIVE_ITEM].create({
        character: character.id,
        item,
      });
      appendCampaignAction({ action });
    }
    this.props.onClose();
  };

  cancel = error => this.props.onClose();

  search = event => {
    const { change } = this.props;
    const { items } = this.state;
    const value = event.target.value;
    const id = parseInt(value, 10);
    const filtered = items.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    // prettier-ignore
    const item = id ? items.find(item => item.id === id)
     : filtered.length === 1 ? filtered[0]
     : undefined;
    change('item', item ? item.id : 0);
  };

  render() {
    const { itemID, handleSubmit, submitting } = this.props;
    const item = this.state.items.find(i => i.id === itemID);

    return (
      <Modal isOpen toggle={this.cancel}>
        <form onSubmit={handleSubmit(this.submit)}>
          <ModalHeader toggle={this.cancel}>Loot Treasure: Receive an Item</ModalHeader>
          <ModalBody>
            <TextField name="search" label="Item:" autoFocus onChange={this.search} placeholder="Item # or name" />
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

CharacterReceiveItemDialog.propTypes = {
  appendCampaignAction: PropTypes.func.isRequired,
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  // connect
  itemID: PropTypes.number.isRequired,
  // reduxForm
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

CharacterReceiveItemDialog.defaultProps = {};

export default compose(connect(...connectConfig), reduxForm(formConfig))(CharacterReceiveItemDialog);
