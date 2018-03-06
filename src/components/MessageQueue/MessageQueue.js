import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import connectConfig from './connect';
import Message from './Message';

class MessageQueue extends Component {
  closeMessage = id => {
    this.props.removeMessage({ id });
  };

  render() {
    const { messages } = this.props;
    if (!messages.length) return null;

    return (
      <div className="MessageQueue">{messages.map(m => <Message key={m.id} {...m} onClose={this.closeMessage} />)}</div>
    );
  }
}

MessageQueue.propTypes = {
  messages: PropTypes.array.isRequired,
  removeMessage: PropTypes.func.isRequired,
};

MessageQueue.defaultProps = {};

export default connect(...connectConfig)(MessageQueue);
