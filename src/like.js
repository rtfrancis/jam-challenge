import React, { Component } from 'react';
import axios from 'axios';

class likeMe extends Component{
    constructor(props){
        super(props);
        this.state = {}
        this.likeSong = this.likeSong.bind(this);
    }
    likeSong(){
        this.setState({
            liked: "/likeRed.png"
        })
        axios.post("/like", {id: this.props.id}).then(result => {
            if(!result.data.success){
                this.setState({
                    liked: false
                })
            }
        })
    }
    render(){
        return (
            <div className="heartContainer">
                <img onClick={this.likeSong} className="heart" src={this.state.liked || "/like.png"} alt="heart icon" />
            </div>
        )
    }
}

export default likeMe;
