import React from "react";
import Counter from "../components/counter";


class CheckCounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      displayForm: false,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.changeDisplayFormStatus = this.changeDisplayFormStatus.bind(this);
  }

  handleIncrement() {
    console.log("increment");
    this.setState({
      currentValue: this.state.currentValue + 1,
    });
  }

  handleDecrement() {
    console.log("decrement");
    this.setState({
      currentValue: this.state.currentValue - 1,
    });
  }

  changeDisplayFormStatus() {
    this.setState({
      displayForm: !this.state.displayForm,
    });
  }

  render() {
    return (
      <Counter
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        changeDisplayFormStatus={this.changeDisplayFormStatus}
        currentValue={this.state.currentValue}
        displayForm={this.state.displayForm}
      />
    );
  }
}

export default CheckCounterContainer;
