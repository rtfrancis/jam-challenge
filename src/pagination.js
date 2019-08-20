import React from 'react';

// class Pagination extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//         }
//         this.getPages = this.getPages.bind(this);
//     }
//     getPages(){
//         const pages = [];
//         for (var i = 1; i <= Math.ceil(this.props.totalResults / this.props.perPage); i++) {
//             pages.push(i);
//         }
//         this.setState({
//             pages: pages
//         })
//     }
//     componentDidMount(){
//         console.log("inside pagination", this.props);
//         this.getPages();
//     }
//     componentDidUpdate(){
//         console.log("inside pagination update", this.props);
//     }
//     render(){
//         return <div>
//             {this.state.pages && this.state.pages.map(number => {
//                 return(<li key={number} onClick={() => this.props.updatePage(number)}>{number}</li>)
//             })}
//         </div>
//     }
// }
//


const Pagination = ({numPerPage, totalResults, updatePageNumber, currentPage}) => {
    console.log("from import!", currentPage);
    const pages = [];

    for (var i = 1; i <= Math.ceil(totalResults / numPerPage); i++) {
        pages.push(i);
    }

    return <div id="pageNumbers">
                {pages.map(number => {
                    return(<p className={currentPage === number ? "page active" : "page"} key={number} onClick={() => updatePageNumber(number)}>{number}</p>)
                })}
            </div>
}

export default Pagination;
