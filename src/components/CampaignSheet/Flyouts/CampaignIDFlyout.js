import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CopyButton from 'react-clipboard.js';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import mailto from './mailto';

class CampaignIDFlyout extends Component {
  state = { copied: false };

  blur = () => document.body.click();

  copy = event => {
    this.setState({ copied: true });
    setTimeout(() => this.setState({ copied: false }, this.blur), 350);
  };

  render() {
    const { campaign } = this.props;
    const { copied } = this.state;

    const copyClassName = classNames('list-group-item action', {
      'list-group-item-success': copied,
    });

    // <i className="fa fa-fw fa-copy" /> Copy
    return (
      <Flyout text={campaign.id} className="campaign-id">
        <Flyout.Head>Actions</Flyout.Head>
        <ListGroup>
          <CopyButton
            className={copyClassName}
            data-clipboard-text={campaign.id}
            button-title="Copy"
            onClick={this.copy}
          >
            <span>
              <i className="fa fa-fw fa-copy" /> Copy
            </span>
          </CopyButton>
          <ListGroupItem tag="a" href={mailto(campaign.id)} action onClick={this.blur}>
            <i className="fa fa-fw fa-envelope-o" /> Email
          </ListGroupItem>
        </ListGroup>
      </Flyout>
    );
  }
}

CampaignIDFlyout.propTypes = {
  campaign: PropTypes.object.isRequired,
};

CampaignIDFlyout.defaultProps = {};

export default CampaignIDFlyout;
