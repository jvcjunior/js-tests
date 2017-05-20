import React from 'react';
import VideoTableListItem from './video_table_list_item'

const VideoTableList = (props) => {
    const videoItems = props.movies.map((movie) => {
        return (
            <VideoTableListItem movie={movie}/>
                //onVideoSelect={props.onVideoSelect}
                //key={video.etag}
                //video={video}/>
        );
    })
    return (
        <table className="table-fill">
            <thead>
                <tr>
                    <th class="text-left">Title</th>
                    <th class="text-left">Year</th>
                </tr>
            </thead>
            <tbody class="table-hover">
                {videoItems}
            </tbody>
        </table>
    );
}

export default VideoTableList;