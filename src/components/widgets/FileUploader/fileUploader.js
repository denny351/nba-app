import React, { Component } from 'react'
import { firebase } from '../../../firebase';
import FileUploader from 'react-firebase-file-uploader';

class Uploader extends Component {
	state = {
		name: '',
		isUploading: false,
		progress: 0,
		fileURL: ''
	};

	handleUploadStart = () => {
    this.setState({isUploading: true, progress: 0});
  }

  handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.log(error)
  }

  handleUploadProgress = (progress) => {
    this.setState({progress});
  }

  handleUploadSuccess = (filename) => {
    this.setState({name: filename, progress: 100, isUploading: false});
    firebase.storage().ref('images').child(filename).getDownloadURL()
      .then(url => {
        this.setState({fileURL: url});
      });

    this.props.filename(filename);
  }




	render() {
		return (
			<div>
				<FileUploader
					accept="image/*"
					name="image"
					randomizeFilename
					storageRef={firebase.storage().ref('images')}
					onUploadStart={this.handleUploadStart}
					onUploadError={this.handleUploadError}
					onUploadSuccess={this.handleUploadSuccess}
					onProgress={this.handleUploadProgress}
				/>
        { this.state.isUploading
          ? <p>Progress: {this.state.progress}</p>
          : null
        }
        { this.state.fileURL
          ? <img src={this.state.fileURL} style={{width: '300px'}}/>
          : null
        }
			</div>
		);
	}
}

export default Uploader;
