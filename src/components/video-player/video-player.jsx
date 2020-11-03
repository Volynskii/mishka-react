import React, { useState, useEffect, useRef } from "react";
import { string, func } from "prop-types";
import { formatVideoTime } from "../../helpers/formatVideoTime";

const VideoPlayer = ({ name, poster, src, onClose }) => {
    const videoRef = useRef(null);

    const [isPlaying, setPlay] = useState(false);
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const togglePosition = (time / duration) * 100;

    useEffect(() => {
        const { current: video } = videoRef;
        video.oncanplaythrough = () => setDuration(Math.floor(video.duration));
        video.ontimeupdate = () => setTime(Math.floor(video.currentTime));
        video.onplay = () => setPlay(true);
        video.onpause = () => setPlay(false);

        return () => {
            video.oncanplaythrough = () => null;
            video.ontimeupdate = () => null;
            video.onplay = () => null;
            video.onpause = () => null;
        };
    }, []);

    const handlePlay = () => {
        const { current: video } = videoRef;
        setPlay(true);
        video.play();
    };

    const handlePause = () => {
        const { current: video } = videoRef;
        setPlay(false);
        video.pause();
    };

    const handleFullScreen = () => {
        const { current: video } = videoRef;
        video.requestFullscreen();
    };

    return (
        <div className="player">
            <video
                ref={videoRef}
                preload="metadata"
                className="player__video"
                src={src}
                poster={poster}
            />

            <button type="button" className="player__exit" onClick={onClose}>
                Exit
            </button>

            <div className="player__controls">
                <div className="player__controls-row">
                    <div className="player__time">
                        <progress
                            className="player__progress"
                            value={time}
                            max={duration}
                        />
                        <div
                            className="player__toggler"
                            style={{ left: `${togglePosition}%` }}
                        >
                            Toggler
                        </div>
                    </div>
                    <div className="player__time-value">
                        {formatVideoTime(time, duration)}
                    </div>
                </div>

                <div className="player__controls-row">
                    {isPlaying ? (
                        <button
                            type="button"
                            className="player__play"
                            onClick={handlePause}
                        >
                            <svg viewBox="0 0 19 19" width="19" height="19">
                                <use xlinkHref="#pause"/>
                            </svg>
                            <span>Pause</span>
                        </button>
                    ) : (
                        <button type="button" className="player__play" onClick={handlePlay}>
                            <svg viewBox="0 0 19 19" width="19" height="19">
                                <use xlinkHref="#play-s"/>
                            </svg>
                            <span>Play</span>
                        </button>
                    )}

                    <div className="player__name">{name}</div>

                    <button
                        type="button"
                        className="player__full-screen"
                        onClick={handleFullScreen}
                    >
                        <svg viewBox="0 0 27 27" width="27" height="27">
                            <use xlinkHref="#full-screen"/>
                        </svg>
                        <span>Full screen</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

VideoPlayer.propTypes = {
    name: string,
    poster: string.isRequired,
    src: string.isRequired,
    onClose: func.isRequired
};

export default VideoPlayer;
