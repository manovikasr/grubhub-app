import React, { Component } from 'react';
const axios = require("axios");

class ImageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            image: "http://localhost:3001/userimage/"+localStorage.getItem("user_id")
        };
        this.onUpload = this.onUpload.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        console.log(e.target.files[0]);
        console.log("hello");
        this.setState({
            file: e.target.files[0],
            image: this.state.image
        });
    }

    onUpload = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", this.state.file);
        const uploadConfig = {
            headers: {
                "content-type": "multipart/form-data"
            }
        };
        axios.post("http://localhost:3001/uploads/"+localStorage.getItem("user_id"), formData, uploadConfig)
            .then(response => {
                alert("Image uploaded successfully!");
            })
            .catch(err => {
                console.log("Error");
            });
    }

    render() {
        let title = null;
        if(localStorage.getItem("is_owner") === "1"){
            title = "Owner Image";
        }
        else{
            title = "Customer Image";
        }
        return (
            <form onSubmit={this.onUpload}>
                <h3>{title}</h3>
                <img src={this.state.image} style={{ height: '10%', width: '10%' }} alt='GrubHub' /><br/><br/>
                <input type="file" name="image" onChange={this.onChange} />
                <button type="submit">Upload</button>
            </form>
        )
    }
}


export default ImageUploader;