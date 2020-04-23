import React, { Component } from 'react';
import axios from 'axios';
import '../styles/FileUpload.css'

class FileUpload extends Component {
    render() {
        return (
            <div className="upload-btn-wrapper">
                <label class="btn btn-default">Browse<input type="file" hidden onChange = {this.onFileSelect} />
                </label>
                <button className="btn btn-default"  onClick = {this.onFileUpload} >Upload</button>
            </div>
        )
    };

    state = {
        selectedFile: null
    }

    onFileSelect = event => {
        this.setState({ selectedFile: event.target.files[0] }); 
    }

    onFileUpload = () => {
        const file = new FormData();
        file.append("pdf", 
		this.state.selectedFile, 
		this.state.selectedFile.name);
        axios.post('http://localhost:4000/api/pdf/upload', file).then(
            res => {
                console.log(res.statusText);
            }
        );
    }

}

export default FileUpload;
