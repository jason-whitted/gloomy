import React, { Component } from 'react';
import Markdown from 'react-markdown';
import emoji from 'emoji-dictionary';

import notes from './PatchNotes.md';

const renderers = {
  text: text => text.replace(/:\w+:/gi, name => emoji.getUnicode(name)),
};

class PatchNotes extends Component {
  state = { source: 'Loading...' };

  componentWillMount() {
    this.load();
  }

  load = async () => {
    const response = await fetch(notes);
    const source = await response.text();
    this.setState({ source });
  };

  render() {
    const { source } = this.state;

    return (
      <div className="col-12">
        <Markdown source={source} renderers={renderers} />
      </div>
    );
  }
}

export default PatchNotes;
