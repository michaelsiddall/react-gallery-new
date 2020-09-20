import Axios from "axios";
import React, { Component } from "react";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList";
import "../GalleryItem/GalleryItem.css";
import "../GalleryList/GalleryList.css";

class App extends Component {
  state = {
    gallery: [],

    //end state
  };

  componentDidMount() {
    console.log("App is ready to do things");
    this.getPicts();
  } // end componentDidMOunt

  getPicts = () => {
    //GET items from server via AXIOS
    Axios({
      method: "GET",
      url: "/gallery",
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

  onLike = (galleryItem) => {
    Axios({
      method: "PUT",
      url: `gallery/like/${galleryItem}`,
    })
      .then((response) => {
        console.log("back from PUT:", response);
        this.getPicts();
      })
      .catch((err) => {
        console.error(err);
        alert("Could not add to counter");
      }); //end axios
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryList
          onLike={this.onLike}
          id={this.state.gallery.id}
          gallery={this.state.gallery}
        />
      </div>
    );
  }
}

export default App;
