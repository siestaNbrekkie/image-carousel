import React from 'react';
import styles from '../styles/CarouselCaption.css';

class CarouselCaption extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.sidePanel}>
                <div className={styles.caption}>
                    <p>{this.props.currentPhoto+1}/{this.props.imageData.length}</p>
                    <p>{this.props.imageData[this.props.currentPhoto].caption}</p>
                </div>
            </div>
        )
    }
}

export default CarouselCaption;