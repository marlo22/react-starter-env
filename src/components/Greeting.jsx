import React from 'react';

class Greeting extends React.Component {
  state = {
    initialized: false,
  }

  componentDidMount() {
    this.welcome();
  }

  welcome = () => {
    this.setState({ initialized: true });
    console.log('Hello console!');
  }

  render() {
    return (
      <h1>Is app initialized? {this.state.initialized.toString()}</h1>
    );
  }
}

export default Greeting;
