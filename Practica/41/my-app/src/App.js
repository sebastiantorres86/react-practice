import React from "react";
import "./index.css";

const inputStyle = {
  width: 235,
  margin: 5,
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    // First, initialize the state of CheckUserAge with input and userAge both set to
    // values of an empty string.
    this.state = {
      userAge: "",
      input: "",
    };
    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: "",
    });
  }
  submit() {
    this.setState((state) => ({
      userAge: state.input,
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {/* change code here */}
        {/* when the page first loads, render the submit button, buttonOne, to the page. 
        Then, when a user enters their age and clicks the button, render a different 
        button based on the age. If a user enters a number less than 18, render buttonThree.
         If a user enters a number greater than or equal to 18, render buttonTwo. */}
        {this.state.userAge === ""
          ? buttonOne
          : this.state.userAge >= 18
          ? buttonTwo
          : buttonThree}
      </div>
    );
  }
}

export default CheckUserAge;
