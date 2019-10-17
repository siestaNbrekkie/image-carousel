import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageGallery from './component/ImageGallery.jsx';
import ImageCarousel from './component/ImageCarousel.jsx';
import Image from './component/Image.jsx';
import styles from './styles/index.css';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            imageData: [],
            image: [],
            popUp: false
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData() {
        var parts = document.URL.split("/");
        var lastSegment = parts.pop() || parts.pop();
        
        axios.get(`http://localhost:3001/${lastSegment}`)
        .then(data => this.setState({
            imageData: data.data,
            image: data.data[0]
        }) 
    )};
    prevImage() {
        const newIndex = this.state.index-1;
        this.setState({
            index: newIndex,
            image: this.state.imageData[newIndex]
        })
    }
    nextImage() {
        const newIndex = this.state.index+1;
        console.log(this.state.index);
        this.setState({
            index: newIndex,
            image: this.state.imageData[newIndex]
        })
    }
    handlePopUp() {
        if (!this.state.popUp) {
            this.setState({
                popUp: true
            })
        } else {
            this.setState({
                popUp: false
            })
        }
    }
    render() {
        if(this.state.imageData[1] && !this.state.popUp) {
            return(
                <div>
                    <h1>React is Working</h1>
                    <button onClick={this.handlePopUp.bind(this)}>popUp</button>
                    <br></br>
                    <ImageGallery imageData={this.state.imageData}/>
                    {/* <ImageCarousel imageData={this.state.imageData}/> */}
                </div>
            )
        } 
        else if (this.state.popUp) {
            return(
                <div>
                    <button onClick={this.prevImage.bind(this)}>Prev</button>
                    <button onClick={this.nextImage.bind(this)}>Next</button>
                    <button onClick={this.handlePopUp.bind(this)}>Exit</button>
                    <div className={styles.imageSlider}>
                        <div className={styles.imageWrapper} style={{
                            'transform': `translateX(-${this.state.index*(100/this.state.imageData.length)}%)`
                        }}>
                            {this.state.imageData.map(image=> <Image imageData={image}/>)}
                        </div>
                    </div>
                </div>
        )
    }
    else return (
        <div>Hi</div>
    )
}
}

ReactDOM.render(<App />, document.getElementById('app'));
export default App.fetchData();