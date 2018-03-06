import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Tab extends Component {
  click = event => {
    this.props.onClick(this.props.name);
  };

  render() {
    const { active, icon, title, shortTitle } = this.props;

    return (
      <li className="nav-item">
        <button className={classNames('btn-link nav-link', { active })} onClick={this.click}>
          <span className="d-none d-sm-inline">
            <i className={`fa fa-fw ${icon}`} />
            {title}
          </span>
          <span className="d-inline d-sm-none small">{shortTitle}</span>
        </button>
      </li>
    );
  }
}

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};

Tab.defaultProps = {};

export default Tab;
