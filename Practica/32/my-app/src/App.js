import React from "react";
import "./index.css";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // change code below this line
    console.log("test");
    // change code above this line
  }
  render() {
    return <div />;
  }
}

export default MyComponent;
