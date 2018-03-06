import React, { Component } from 'react';

import { BugIcon, CrossFingersIcon } from '../Icons';
import { Module } from '../Module';

class UnexpectedError extends Component {
  refresh = () => {
    sessionStorage.clear();
    window.location.assign('/');
  };

  render() {
    return (
      <Module open>
        <Module.Head>
          <BugIcon /> ¯\_(ツ)_/¯
        </Module.Head>
        <Module.Body>
          <blockquote className="blockquote">
            <p className="mb-0">"I've got good news and bad news."</p>
            <footer className="blockquote-footer">Some dude</footer>
          </blockquote>
          <hr />
          <h5>Bad News:</h5>
          <p>
            This site was hacked together with much haste by a terrible programmer. As was to be expected we've
            encountered a totally unexpected error.
          </p>
          <h5>Good News:</h5>
          <p>
            I just saved a bunch of money by switching to Geico<sup>&copy;</sup>!
          </p>
          <p>
            You can try clicking this{' '}
            <button type="button" className="btn btn-sm btn-outline-success" onClick={this.refresh}>
              <CrossFingersIcon /> Magic&trade; Button
            </button>{' '}
            to hard-refresh everything.
          </p>
        </Module.Body>
      </Module>
    );
  }
}

export default UnexpectedError;
