import React, { Component } from 'react'
import Axios from 'axios';
import '../styles/FileUpload.css'

class FileDelete extends Component {
    render() {
        return (
            <div id="b">
				<div id="b2">
					<button className="btn btn-default btn-sm" onClick =  {this.onClick}>Delete</button>
				</div>
			</div>
        )
    }

    onClick = () => {
        Axios.delete('http://localhost:4000/api/pdf/delete/'+this.props.fileID);
    }
}

export default FileDelete;
