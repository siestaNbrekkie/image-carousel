import React from 'react';
import styles from '../styles/imageGallery.css';

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.main}>
                    <img src={this.props.imageData[0].photoUrl}/>
                </div>
                <div className={styles.topLeft}>
                    <img src={this.props.imageData[1].photoUrl}/>
                </div>
                <div className={styles.bottomLeft}>
                    <img src={this.props.imageData[2].photoUrl}/>
                </div>
                <div className={styles.topRight}>
                    <img src={this.props.imageData[3].photoUrl}/>
                </div>
                <div className={styles.bottomRight}>
                    <img src={this.props.imageData[4].photoUrl}/>
                </div>
            </div>
        )
    }
}

export default ImageGallery;