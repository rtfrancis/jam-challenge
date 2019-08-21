import React, { Component } from 'react';
import LikeMe from "./like";
import Comment from "./comment";
import Player from "./audioPlayer";

class Songs extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
        // this.updatePlayingStatus = this.updatePlayingStatus.bind(this);
    }
    // updatePlayingStatus(status){
    //     this.setState({
    //         active: status
    //     })
    // }
    componentDidMount(){
        console.log("props from APP: ", this.props);
    }
    render(){
        if(!this.props.songs){
            console.log("nothing");
            return null;
        }else{
            return <div id="songsContainer">
                {this.props.songs && this.props.songs.map(item =>{
                    return <div className="eachSong" key={item.id}>
                        <div className="imageContainer">
                            <img className="coverImage" src={item.cover_image_path} alt="cover art"/>
                        </div>
                        <h2 className="songTitle">{ item.name }</h2>
                        <Player song={ item.music_file_path } updatePlayingStatus={this.props.updatePlayingStatus} status={this.props.playStatus}
                        />
                        <LikeMe id={item.id}/>
                        <Comment id={item.id}/>
                    </div>
                })}
            </div>
        }

    }
}
 export default Songs;
