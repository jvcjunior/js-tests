import React from 'react';

const Pagination = () => {
    return (
        <div className="paginate paginate-dark wrapper">
        <ul>
            <li><a href="">&lang;</a></li>
            <li><a href="">1</a></li>
            <li><a href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="" class="active">4</a></li>
            <li><a href="">5</a></li>
            <li><a href="" class="more">&hellip;</a></li>
            <li><a href="">98</a></li>
            <li><a href="">99</a></li>
            <li><a href="">100</a></li>
            <li><a href="">&rang;</a></li>
        </ul>
    </div>
    );
}

export default Pagination;