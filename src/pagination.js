import React from 'react';

const Pagination = ({numPerPage, totalResults, updatePageNumber, currentPage}) => {
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
