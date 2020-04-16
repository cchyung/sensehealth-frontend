import React from 'react';
import Axios from 'axios';
import { testBackendConnection } from '../utils/client';

class Home extends React.Component {
  state = {
    msg: ""
  }

  componentDidMount() {
    testBackendConnection((res) => {

      this.setState({ msg: res.data.key })
    })
  };

  render() {
    return (
      <div>
        <h1>Home Page</h1>

        <p>This is the home page.</p>
        <p>Here's a message from your friendly backend:</p>
        <p>{ this.state.msg }</p>
      </div>
    );
  }
}

export default Home;