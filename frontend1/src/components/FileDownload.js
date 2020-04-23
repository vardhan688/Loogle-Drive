import React, { Component } from 'react'
import Axios from 'axios';
import '../styles/FileUpload.css'

const downFile = require('js-file-download');

class FileDownload extends Component {
    render() {
        return (
            <div id="b">
				<div id="b3">
					<button className="btn btn-default btn-sm" onClick =  {this.onClick}>Download</button>
				</div>
			</div>
		)
    }

    onClick = () => {
        Axios.get('http://localhost:4000/api/pdf/download/'+this.props.fileID, {
            responseType: 'arraybuffer',
            headers: {
                'Accept': 'application/pdf'
             }
        }).then(response => {
            downFile(response.data, this.props.fileName);
        })
    }
}

export default FileDownload;