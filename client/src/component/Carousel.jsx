import React from 'react';
import CarouselPhoto from './CarouselPhoto.jsx';
import CarouselCaption from './CarouselCaption.jsx';
import CarouselThumbnailSlider from './CarouselThumbnailSlider.jsx';
import styles from '../styles/carousel.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPhoto: 0
        }
    }
    handleLeftArrow(event) {
        let newCurrentPhoto = this.state.currentPhoto - 1;
        if (newCurrentPhoto < 0) {
          newCurrentPhoto = this.props.imageData.length - 1;
        }
        this.setState({
          currentPhoto: newCurrentPhoto
        });
    }       
    handleRightArrow(event) {
        let newCurrentPhoto = this.state.currentPhoto + 1;
        if (newCurrentPhoto >= this.props.imageData.length) {
          newCurrentPhoto = 0;
        }
        this.setState({
          currentPhoto: newCurrentPhoto
        });
    }
    render() {
        return (
            <div className={styles.container}>
                <button className={styles.exitButton} onClick={this.props.handlePopUp}>
                <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" style={{height: "24px", width: "24px", display: "block", fill: "rgb(72, 72, 72)"}}><path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd"></path></svg>
                </button>
            <CarouselPhoto 
                handleLeftArrow={this.handleLeftArrow.bind(this)} 
                handleRightArrow={this.handleRightArrow.bind(this)}
                currentPhoto={this.state.currentPhoto}
                imageData={this.props.imageData[this.state.currentPhoto]}
            />
            <CarouselCaption 
                currentPhoto={this.state.currentPhoto}
                imageData={this.props.imageData}
            />
            <CarouselThumbnailSlider 
                imageData={this.props.imageData}
            />
            </div>
        )
    }
}

export default Carousel; 