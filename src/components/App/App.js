import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import GalleryList from "../GalleryList/GalleryList";
import GalleryItem from "../GalleryItem/GalleryItem";

class App extends Component {
  state = {
    gallery: []
    //end state
  }

  componentDidMount() {
    console.log("App is ready to do things");
    this.getPicts();
  } // end componentDidMOunt

  getPicts = () => {
    //GET items from server via AXIOS
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
        <GalleryList gallery={this.state.gallery} />
        < img src="images/goat_small.jpg" />
        <pre>{JSON.stringify(this.state.gallery)}</pre>
      </div>
    );
  }
}

export default App;
