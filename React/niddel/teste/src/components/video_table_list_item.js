import React from 'react';

const VideoTableListItem = ({ movie, onVideoSelect }) => {
    return (
        <tr>
            <td class="text-left">{movie.Title}</td>
            <td class="text-left">{movie.Year}</td>
        </tr>
    )
}

export default VideoTableListItem;
