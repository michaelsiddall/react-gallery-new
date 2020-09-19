import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log("App is ready to do things");
    this.getPicts();
  }

  getPicts = () => {
    Axios({
      method: 'GET',
      url: '/gallery'
    })
      .then((response) => {
        console.log("response", response);
        console.log("response.data", response.data);

        this.setState({
          gallery: response.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" />

      </div>
    );
  }
}

export default App;
