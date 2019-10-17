import React from 'react';

class ImageCarousel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                {this.props.imageData.map(image => <div><img src={image.photoUrl}/></div>)}
            </div>
        )
    }
}

export default ImageCarousel;