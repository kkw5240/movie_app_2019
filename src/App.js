import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

  state = {
    isLoading: true, 
    movies: []
  };

  componentDidMount() {
    setTimeout(()=> {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    console.log("I'm rendering.");
    const { isLoading } = this.state;
    return (
      <div>{ isLoading ? 'Loading...' : 'We are ready.' }</div>
    );
  }
}

export default App;
