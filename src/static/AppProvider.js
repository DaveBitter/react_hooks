// Libs
import React, { Component } from "react";

import { AppContext } from "./Context";

class AppProvider extends Component {
  state = {
    count: 0,
    setCount: this._setCount.bind(this)
  };

  _setCount(count) {
    this.setState({ count });
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
