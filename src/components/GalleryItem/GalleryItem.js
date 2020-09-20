import React, { Component } from "react";

class GalleryItem extends Component {
  state = {
    showDescription: false,
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
          <p className="description" onClick={this.imageClick}>
            {this.props.description}{" "}
          </p>
          <button
            className="button"
            onClick={() => this.props.onLike(this.props.id)}
          >
            Like Me!
          </button>

          <div className="likes">
            Liked <strong>{this.props.likes}</strong> times
          </div>
        </div>
      ); //end return
    } // end showDescription
    else {
      return (
        <div>
          <div className="galleryItems">
            <img src={this.props.path} onClick={this.imageClick} />
          </div>
          <button
            className="button"
            onClick={() => this.props.onLike(this.props.id)}
          >
            Like Me!
          </button>
          <div className="likes">
            Liked <strong>{this.props.likes}</strong> times
          </div>
        </div>
      ); //end return
    } // end !showDescription
  } // end render
} // end class

export default GalleryItem;
