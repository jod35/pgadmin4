/////////////////////////////////////////////////////////////
//
// pgAdmin 4 - PostgreSQL Tools
//
// Copyright (C) 2013 - 2020, The pgAdmin Development Team
// This software is released under the PostgreSQL Licence
//
//////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import Graphs from './Graphs';

export default class ChartsDOM {
  constructor(container, preferences, sid, did, pageVisible=true) {
    this.container = container;
    this.preferences = preferences;
    this.sid = sid;
    this.did = did;
    this.pageVisible = pageVisible;
  }

  mount() {
    if(this.container && this.preferences.show_graphs) {
      ReactDOM.render(<Graphs sid={this.sid} did={this.did} preferences={this.preferences} pageVisible={this.pageVisible}/>, this.container);
    }
  }

  unmount() {
    this.container && ReactDOM.unmountComponentAtNode(this.container);
  }

  setSidDid(sid, did) {
    this.sid = sid;
    this.did = did;
    this.mount();
  }

  reflectPreferences(preferences) {
    this.preferences = preferences;
    if(preferences.show_graphs) {
      this.mount();
    } else {
      this.unmount();
    }
  }

  setPageVisible(visible) {
    this.pageVisible = visible;
    this.mount();
  }
}