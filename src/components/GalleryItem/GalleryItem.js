import React, { Component } from 'react';

class GalleryItem extends Component {
    state = {
        showDescription: false
    }

    handleClick = () => {
        console.log('in handleClick',);
        this.setState({
            showDescription: !this.state.showDescription
        })

    }

    render() {
        //conditional rendering based on state.showDescription
        if (this.state.showDescription) {
            return (

                <li onClick={this.handleClick}>{this.props.galleryItem.description}</li>
            )//end return
        } // end if statement
        else {
            return (
                <li onClick={this.handleClick}><img src={this.props.galleryItem.path} />
                </li>
            )
        }



    } // end render
} // end class

export default GalleryItem;