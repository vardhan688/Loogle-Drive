import React, { Component } from 'react'
import Axios from 'axios';
import '../styles/FileUpload.css'

class FileRename extends Component {
    render() {
        return (
            <div id="b">
                <div id="b1">
					<button className="btn btn-default btn-sm" onClick =  {this.onClick}>Rename</button>
				</div>
				{this.state.clicked && 
                <form className="form-group row">
                    <div className="col-xs-2">
                        <input type="text" name="new-name" placeholder="New name"  value = {this.state.newName}  onChange = {this.newNameHandler} />
                        <button type="button" className="btn btn-default btn-sm" onClick={this.onSubmit}>Submit</button>
                    </div>
                </form> }
            </div>
        )
    }

    state = {
        count: 0,
        clicked: false,
        newName: this.props.fileName
    };

    onClick = () => {
        this.setState({
            count: this.state.count + 1
        });
        if (this.state.count %2 === 0){
            this.setState({
                clicked: true
            });
        }
        else{
            this.setState({
                clicked: false
            });
        }
    }

    newNameHandler = (event) => {
        this.setState({
            newName: event.target.value
        });
    }

    onSubmit = () => {
        const data = {
            name: this.state.newName
        }
        Axios.put('http://localhost:4000/api/pdf/update/'+this.props.fileID, data);
    }
}

export default FileRename;
