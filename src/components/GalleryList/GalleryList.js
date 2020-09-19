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
                <ul>
                    <li>{this.props.gallery.map((galleryItem) =>
                        <GalleryItem key={galleryItem.id} galleryItem={galleryItem} />
                    )}

                    </li>
                </ul>
            </div >
        ); // end return
    } // end render
} // end class

export default GalleryList;