import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var parts = document.URL.split("/");
        var lastSegment = parts.pop() || parts.pop();
        
        axios.get(`http://localhost:3001/${lastSegment}`)
        .then(data => console.log(data.data));
    }
    render() {
        return(
            <div>
                <h1>React is Working</h1>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
