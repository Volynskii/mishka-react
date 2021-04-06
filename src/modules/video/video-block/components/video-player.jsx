import React from 'react';
import YouTube from 'react-youtube';

export const  VideoPlayer = () => {

    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 2,
        },
    };

    const onReady = (event) => {
            // access to player in all event handlers via event.target
            event.target.pauseVideo();
        }

    return (

        <YouTube className={"video-block__video"}  videoId="F6gnmChf7fM" opts={opts} onReady={onReady} />
    )
    }



