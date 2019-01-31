// Libs
import React, { Component } from "react";

// Utils
import AppProvider from "./static/AppProvider";

// Components
import Counter from "./components/Counter/Counter.js";
import CounterWithUseReducer from "./components/Counter/CounterWithUseReducer.js";
import CounterWithUseContext from "./components/Counter/CounterWithUseContext.js";

// Component
class App extends Component {
  render() {
    return (
      <AppProvider>
        <article>
          <h1>useState hook</h1>
          <section>
            <Counter />
          </section>
        </article>

        <article>
          <h1>useReducer hook</h1>
          <section>
            <CounterWithUseReducer />
          </section>
        </article>

        <article>
          <h1>useContext hook</h1>
          <section>
            <CounterWithUseContext />
          </section>
        </article>

        <article>
          <h1>useEffect hook</h1>
          <section>
            <Counter updateTitleAfterAddition={true} />
          </section>
        </article>
      </AppProvider>
    );
  }
}

export default App;
