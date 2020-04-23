import React from 'react';
import FileRename from './FileRename';
import FileDelete from './FileDelete';
import FileDownload from './FileDownload';
import '../styles/FileUpload.css'

const File = ({files}) => {
    return (
        <div>
          {files.map((file) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Name: {file.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Type: {file.mimetype}</h6>
                <p className="card-text">Size: {file.size} KB</p>
                <FileRename fileID={file._id} fileName={file.name} />
                <FileDelete fileID={file._id} />
                <FileDownload fileID={file._id} fileName={file.name} />
              </div>
            </div>
          ))}                     
        </div>
    )
}

export default File;

