import React from "react";
import "./index.css";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Correct the counter property of the state so that the handleClick() method
    // increments it by 1.
    this.setState({
      counter: this.state.counter + 1, // change code here
    });
  }
  render() {
    const expression = Math.random() >= 0.5 ? true : false; // change code here
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* change code below this line */}
        <Results fiftyFifty={expression} />
        {/* change code above this line */}
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}
export default GameOfChance;
