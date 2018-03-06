import React from 'react';
import PropTypes from 'prop-types';

const Cards = ({ classes }) => (
  <div className="card my-3">
    <div className="card-header">Cards</div>
    <div className="card-body">
      <ul>
        {classes.map(({ id, name }) => (
          <li key={id}>
            <a href={`/cards/${id}.pdf`} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Cards.propTypes = {
  classes: PropTypes.array.isRequired,
};

Cards.defaultProps = {};

export default Cards;
