import React, { Component } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

class GalleryList extends Component {
  render() {
    return (
      <div>
        <h1>Check out these cute kids!</h1>
        {this.props.gallery.map((galleryItem) => (
          <GalleryItem
            key={galleryItem.id}
            id={galleryItem.id}
            path={galleryItem.path}
            description={galleryItem.description}
            galleryItem={galleryItem}
            likes={galleryItem.likes}
            onLike={this.props.onLike}
          />
        ))}
      </div>
    ); // end return
  } // end render
} // end class

export default GalleryList;
