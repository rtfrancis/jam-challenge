import React, { Component } from 'react';

class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeButton: false
        }
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play(e){
        if(this.props.status === false || "paused"){
            if(this.props.status === "playing"){
                this.props.updatePlayingStatus("paused");
                return
            }
            this.setState({
                activeButton: "playing"
            })
            this.player.src = this.props.song;
            this.player.play();
            this.props.updatePlayingStatus("playing");
        } else {
            console.log("false");
        }
    }
    pause(){
        if(this.props.status === "playing"){
            this.setState({
                activeButton: "paused"
            })
            this.player.pause();
            this.props.updatePlayingStatus("paused");
        }
    }
    componentDidUpdate(){
        if(this.props.status === "paused" || false){
            this.player.pause();
            this.setState({
                activeButton: false
            })
            this.props.updatePlayingStatus(false);
        }
    }
    render(){
        return(
            <div className="audioPlayer">
                <img className={this.state.activeButton === "playing" ? "audioButtons playButton inactiveAudio" : "audioButtons playButton "} src="/play-button.png" alt="play button" onClick={this.play}/>
                <img className={this.state.activeButton === "playing" ? "audioButtons playButton" : "audioButtons playButton inactiveAudio"} src="/pause.png" alt="pause button" onClick={this.pause}/>
                <audio ref={ref => this.player = ref} />
            </div>
        )
    }
}

export default Player;
