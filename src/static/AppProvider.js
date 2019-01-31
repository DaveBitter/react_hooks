// Libs
import React, { Component } from "react";

import { AppContext } from "./Context";

class AppProvider extends Component {
  state = {};

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppProvider;
