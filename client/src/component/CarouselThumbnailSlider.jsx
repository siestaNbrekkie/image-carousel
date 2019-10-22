import React from 'react';
import styles from '../styles/carouselThumbnailSlider.css';

class CarouselThumbnailSlider extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let currentMiniGalleryImageCss = {
            border: 'solid 2px #414141',
            opacity: 1
        };
        let miniGalleryTranslate = {
            transform: `translateX(${10 + -48 * this.props.currentPhoto}px)`
        };
        return (
            <div className={styles.sidePanel}>
                <div className={styles.miniGallery}>
                {this.props.imageData.map(image => {
                    return (
                        <div className={styles.miniGalleryItem} style={{...miniGalleryTranslate, ...currentMiniGalleryImageCss}} >
                            <img src={image.photoUrl}></img>
                        </div>
                    )
                })}

                </div>
            </div>
        )

    }
}

export default CarouselThumbnailSlider;