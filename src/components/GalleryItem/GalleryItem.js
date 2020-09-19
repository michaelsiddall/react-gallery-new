import React, { Component } from "react";

class GalleryItem extends Component {
  state = {
    showDescription: false,
    likes: 0,
  };

  onIncreaseLike = () => {
    console.log('you clicked "LIKE"');
  };

  //setting new state when image clicked
  imageClick = () => {
    console.log("in imageClick");
    this.setState({
      showDescription: !this.state.showDescription,
    });
  };
  render() {
    //conditional rendering based on state.showDescription
    if (this.state.showDescription) {
      return (
        <div>
          <p onClick={this.imageClick}>{this.props.galleryItem.description} </p>
          <button onClick={this.onIncreaseLike}>Like Me</button>
        </div>
      ); //end return
    } // end showDescription
    else {
      return (
        // <img src onClick={this.imageClick}>{}>
        <div>
          <img src={this.props.galleryItem.path} onClick={this.imageClick} />
          <button onClick={this.onIncreaseLike}>Like Me</button>
        </div>
      ); //end return
    } // end !showDescription
  } // end render
} // end class

export default GalleryItem;
