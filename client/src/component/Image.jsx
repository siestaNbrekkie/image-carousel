import React from 'react';
import styles from '../styles/image.css';

class Image extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const property = this.props.imageData;
        return(
            <div className={styles.image}>
                <div>
                    <img src={property.photoUrl}/>
                </div>
                <div>
                    <p>{property.caption}</p>
                </div>
            </div>
        )
    }
}

export default Image;
