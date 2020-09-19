import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    componentDidMount() {
        console.log('_template mounted', this.props);
    } // end componentDidMount

    render() {
        return (
            <div>
                <h1>Check out these cute kids!</h1>

                <ul>{this.props.gallery.map((galleryItem) =>
                    <GalleryItem thisGalleryItem={galleryItem} key={galleryItem.id} id={galleryItem.id} title={galleryItem.title}
                        description={galleryItem.description} path={galleryItem.path} />
                )}

                </ul>

            </div >
        ); // end return
    } // end render
} // end class

export default GalleryList;