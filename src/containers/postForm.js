import React, { Component } from 'react'
import classes from '../stylesheets/postForm.css'
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc'
import axios from 'axios'

const imgStyle = {
    padding: "4px",
    borderRadius: "2px",
    border: "0.5px solid rgb(211, 211, 211)",
    boxShadow: "0 2px 10px #bbb"
}

const liStyle = {
    listStyle: "none"
}

const SortableItem = SortableElement(({ value }) =>
    <li style={liStyle}><img alt="" style={imgStyle} height="100px" src={value} /></li>
)

const SortableList = SortableContainer(({ items }) => {
    return (
        <ul className={classes.uploadedFiles}>
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </ul>
    )
})



class PostForm extends Component {

    state = {
        title: "",
        description: "",
        tags: [],
        files: [],
        hasFiles: false
    }

    fileUploadHandler = (e) => {
        const uploadedFiles = [...e.target.files]
        let uploadedActualFiles = []
        uploadedFiles.forEach((element, index) => {
            if (!e.target.files || !window.FileReader) return null

            const reader = new FileReader()
            reader.onload = e => {
                uploadedActualFiles.push(e.target.result)
            }
            reader.readAsDataURL(element)
        })


        setTimeout(() => {
            this.setState({
                files: uploadedActualFiles,
                hasFiles: true
            })
        }, 500)
    }

    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState({
            files: arrayMove(this.state.files, oldIndex, newIndex),
        })
    }

    publishPostURL = "http://mrinalraj.com"
    

    publishPostHandler = () => {
        if (this.state.title !== "" &&  this.state.description !== "" && typeof this.state.files !== 'undefined' && this.state.files.length > 0) {
            const data = {
                title : this.state.title,
                description : this.state.description,
                files : this.state.files
            }
            axios.post(this.publishPostURL, data).then((response,reject) => {
                if (reject) return console.log("err");
                console.log(data);
            })
        }
        else{
            console.log("you may be missing something")
        }
    }

    render() {

        let images = null

        if (this.state.hasFiles) {
            images = (
                <SortableList items={this.state.files} onSortEnd={this.onSortEnd} axis="x" />
            )
        }

        const sendImage = {
            margin: "15px 13px 15px 17px"
        }

        const sendImgCDN = "https://png.icons8.com/android/80/ffffff/paper-plane.png"

        return (
            <div>
                <div className={classes.PostForm}>
                    <input type="text" value={this.state.title} onChange={event => { this.setState({ title: event.target.value }) }} placeholder="Project Name" />
                    <textarea rows="6" value={this.state.description} onChange={event => { this.setState({ description: event.target.value }) }} placeholder="Write project description"></textarea>
                    <input type="text" onChange={event => {
                        this.setState({ tags: event.target.value.split(" ") })
                    }} placeholder="Tags (seperated by space)" />
                    <input type="file" onChange={this.fileUploadHandler} className={classes.fileUpload} multiple name="files" id="files" accept="image/x-png,image/gif,image/jpeg" />
                    {images}
                </div>
                <button className={classes.publish}><img src={sendImgCDN} alt="" style={sendImage} height="20px" width="20px" onClick={this.publishPostHandler} /></button>
            </div>
        )
    }

}

export default PostForm