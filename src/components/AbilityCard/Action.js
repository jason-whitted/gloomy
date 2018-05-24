import React, { Component } from 'react';

import Actions from './Actions';
import AugmentList from './AugmentList';

class Action extends Component {
  render() {
    const { action: { action, bonuses } } = this.props;
    const ActionComponent = Actions[action];
    console.log('Action', this.props);
    console.log({ ActionComponent });
    if (!ActionComponent) {
      return <div>{action}</div>;
    }

    const augmentList = <AugmentList {...this.props} />;

    return (
      <ActionComponent {...this.props} augments={augmentList}>
        {bonuses && (
          <div className="bonuses">
            {bonuses.map((bonus, i) => <Action key={i} {...this.props} action={bonus} isBonus />)}
          </div>
        )}
      </ActionComponent>
    );
  }
}

export default Action;
