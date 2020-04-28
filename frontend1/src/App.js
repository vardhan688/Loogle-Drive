import React, {Component} from 'react';
import File from './components/File';
import FileUpload from './components/FileUpload';
import './App.css';

class App extends Component {
    render() {
        return (
          <div id="title">
            <center><h1>Loogle Drive - Free file storage</h1></center>
            <FileUpload />
            <File files={this.state.files} />
          </div>
        )
    }

    state = {
        files: []
    };

    componentDidMount() {
        fetch('http://localhost:4000/api/pdf/list-all')
            .then(res => res.json())
            .then((data) => {
                this.setState({ files: data })
            })
            .catch(console.log)
    }
}

export default App;
