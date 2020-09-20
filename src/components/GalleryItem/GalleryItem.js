import React, { Component } from "react";

class GalleryItem extends Component {
  state = {
    showDescription: false,
    likes: 0,
  };

  // onIncreaseLike = () => {
  //   console.log('you clicked "LIKE"');
  //   this.setState({
  //     likes: this.state.likes + 1,
  //   });
  // };

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
          <p onClick={this.imageClick}>{this.props.description} </p>
          <button onClick={() => this.props.onLike(this.props.id)}>
            Like Me
          </button>

          <div>Likes: {this.props.likes}</div>
        </div>
      ); //end return
    } // end showDescription
    else {
      return (
        <div>
          <img src={this.props.path} onClick={this.imageClick} />
          <button onClick={() => this.props.onLike(this.props.id)}>
            Like Me
          </button>
          <div>Likes: {this.props.likes}</div>
        </div>
      ); //end return
    } // end !showDescription
  } // end render
} // end class

export default GalleryItem;
