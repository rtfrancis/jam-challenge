import React, { Component } from 'react';
import axios from "axios";

class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {}
        this.handleInput = this.handleInput.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }
    handleInput(e){
        this[e.target.name] = e.target.value;
    }
    submitComment(e){
        console.log("comment text", this.comment, this.text.value);

        if(this.comment !== undefined){
            axios.post("/comment", {id: this.props.id, message: this.comment, type: "song"}).then(({data}) => {
                console.log(data);
                if(data.success){
                    this.text.classList.add = "hidden";
                    this.setState({
                        comment: this.comment,
                        timestamp: data.date
                    })
                    this.text.value = "";
                } else {
                    console.log("there was an error");
                    this.setState({
                        comment: "Sorry. A problem occured. Please try again."
                    })
                }
            })

        } else {
            console.log("nope!");
            this.setState({
                comment: "Sorry. A problem occured. Please try again."
            })
            return null
        }
    }
    render(){
        return <div className="commentContainer">
                    <div>{ this.state.comment && this.state.comment}
                    <div className="timestamp">{ this.state.timestamp && this.state.timestamp}</div>
                    </div>
                    <div className={this.state.comment ? "hidden" : ""}>Leave a comment:</div>
                    <textarea rows="5" cols="25" type="text" name="comment" className={this.state.comment ? "hidden" : ""}
                    ref={elem => {
                        this.text = elem;
                    }}
                    onChange={this.handleInput}/>
                    <div className={this.state.comment ? "hidden" : "submitButton"} onClick={this.submitComment}>Submit</div>
                </div>
    }
}

export default Comment;
