// Libs
import React, { Component } from "react";

// Components
import Counter from "./components/Counter/Counter.js";

// Component
class App extends Component {
  render() {
    return (
      <>
        <article>
          <h1>useState hook</h1>
          <section>
            <Counter />
          </section>
        </article>

        <article>
          <h1>useEffect hook</h1>
          <section>
            <Counter updateTitleAfterAddition={true} />
          </section>
        </article>
      </>
    );
  }
}

export default App;
