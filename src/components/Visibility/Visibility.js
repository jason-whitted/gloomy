import React, { Component } from 'react';

class Visibility extends Component {
  state = { spoiled: false };

  spoil = () => this.setState({ spoiled: true });

  render() {
    const { restricted, visibility, children } = this.props;

    if (restricted) {
      if (visibility === '2') return <i>Redacted</i>;
      if (visibility === '1' && !this.state.spoiled) {
        return (
          <a href="#spoiler" onClick={this.spoil}>
            <i>Spoiler</i>
          </a>
        );
      }
    }

    return children;
  }
}

export default Visibility;
