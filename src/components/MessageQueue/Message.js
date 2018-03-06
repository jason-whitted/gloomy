import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
  close = event => {
    const { id, onClose } = this.props;
    onClose(id);
  };

  render() {
    const { type, title, text } = this.props;

    return (
      <div className={`alert ${type} alert-dismissible fade show`} role="alert">
        {title && <h4 className="alert-heading">{title}</h4>}
        {text}
        <button className="close" onClick={this.close}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

Message.propTypes = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
};

Message.defaultProps = {
  title: '',
};

export default Message;
