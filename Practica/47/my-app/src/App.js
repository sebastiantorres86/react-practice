import React from "react";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />;
  }
}

// change code below this line
ReactDOMServer.renderToString(<App />);

export default App;
