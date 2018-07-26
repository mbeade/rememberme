import React from 'react'
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

export default class ImageUploaderComponent extends React.Component {

    state = {
        username: "",
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
    };

    handleChangeUsername = event => this.setState({ username: event.target.value });

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

    handleProgress = progress => this.setState({ progress });

    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };

    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ avatarURL: url }));
    };

    render() {
        return (
            <div>
                <label style={{ backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, pointer: 'cursor' }}>
                    Select your site screenshot
                        <FileUploader
                        hidden
                        accept="image/*"
                        storageRef={firebase.storage().ref('images')}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                </label>
            </div>
        );
    }
}