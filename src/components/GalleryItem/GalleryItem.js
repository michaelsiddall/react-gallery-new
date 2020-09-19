import React, { Component } from 'react';

class GalleryItem extends Component {
    componentDidMount() {
        console.log('in GalleryItem componentDidMount');
    } // end componentDidMount

    render() {
        return (
            <table>
                <tr><img src={this.props.galleryItem.path} /></tr>
            </table >
        ); // end return
    } // end render
} // end class

export default GalleryItem;