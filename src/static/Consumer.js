// Libs
import React from "react";

import { AppContext } from "./Context";

export const withAppProvider = Component => {
  return function wrapWithApp(props) {
    return (
      <AppContext.Consumer>
        {app => <Component {...props} app={app} />}
      </AppContext.Consumer>
    );
  };
};
