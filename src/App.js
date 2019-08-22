import React, {Component} from 'react';
import axios from "axios";
import Songs from "./songs";
import Pagination from "./pagination";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            numPerPage: 2,
            currentPage: 1,
            playStatus: false
        };
        this.songsPerPage = this.songsPerPage.bind(this);
        this.updatePageNumber = this.updatePageNumber.bind(this);
        this.updatePlayingStatus = this.updatePlayingStatus.bind(this);
    }
    songsPerPage(e){
        const resultsPerPage = Number(e.target.value);
        this.setState({
            numPerPage: resultsPerPage,
            currentPage: 1,
        });
    }
    updatePageNumber(num){
        this.setState({
            currentPage: num,
            playStatus: false
        })
    }
    updatePlayingStatus(status){
        this.setState({
            playStatus: status
        })
    }
    componentDidMount(){
        return axios.get("/songs")
        .then(results => {
            this.setState({
                songs: results.data
            })
        })
    }
    render(){
        if(!this.state.songs){
            return null
        }
        let indexOfLastPost = this.state.currentPage * this.state.numPerPage;
        let indexOfFirstPost = indexOfLastPost - this.state.numPerPage;
        let updatedSongList = this.state.songs.slice(indexOfFirstPost, indexOfLastPost)
        return <div id="mainPage">
            <img id="logo" src="/logo.png" alt="JAM logo"/>
            <p>Results per page:</p>
            <select id="resultNum" name="perPage" onChange={this.songsPerPage}>
                <option value='2'>2</option>
                <option value='5'>5</option>
                <option value='10'>10</option>
            </select>
            <Songs perPage={this.state.numPerPage}              songs={updatedSongList} playStatus={this.state.playStatus}
            updatePlayingStatus={this.updatePlayingStatus}
            />
            <Pagination numPerPage={this.state.numPerPage}  totalResults={this.state.songs.length} updatePageNumber={this.updatePageNumber}
            currentPage={this.state.currentPage}
            />
            <div id="footer">
                <p>Created in 2019 for Just Add Music</p>
            </div>
        </div>
    }
}

export default App;
