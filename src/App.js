import React, {Component} from 'react';
import axios from "axios";
import Songs from "./songs"
import Pagination from "./pagination"

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
        // console.log("????", Number(resultsPerPage));
        this.setState({
            numPerPage: resultsPerPage,
            currentPage: 1,
            // playStatus: false
        });
    }
    updatePageNumber(num){
        // console.log("LOGGING NUMBER", num);
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
            console.log(results.data);
            this.setState({
                songs: results.data
            })
            // console.log("returned from API: ", results);
            // console.log("state check: ", this.state);
        })
    }
    render(){
        if(!this.state.songs){
            return null
        }
        let indexOfLastPost = this.state.currentPage * this.state.numPerPage;
        let indexOfFirstPost = indexOfLastPost - this.state.numPerPage;
        let updatedSongList = this.state.songs.slice(indexOfFirstPost, indexOfLastPost)
        // console.log("BIG LOG", indexOfFirstPost, indexOfLastPost, currentPosts);
        return <div>
            <img id="logo" src="/logo.png" alt="JAM logo"/>
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

        </div>
    }
}

export default App;
