import './video-block.scss';
import React, {useState, useRef, useEffect} from "react";
import { Link } from "react-router-dom";


type videoBlockContainerProps = {
src: string;
poster: string;
isPlaying: boolean;
onMouseEnter: () => void;
onMouseLeave: () => void;
width: string;
height: string;
}

export const VideoBlock: React.FC<videoBlockContainerProps> = ({src,poster,isPlaying, onMouseEnter, onMouseLeave, width,
                                                               height}) => {

    const videoRef = useRef(null);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const { current: video } : { current:any } = videoRef;
        video.oncanplaythrough = () => {
            setLoading(false);
        };

        return () => {
            video.oncanplaythrough = null;
        };
    }, []);

    useEffect(() => {
        const { current: video }: {current: any} = videoRef;
        if (isLoading) {
            return;
        }

        if (isPlaying) {
            video.play();
        } else {
            video.load();
        }
    }, [isLoading,isPlaying]);

    return (
        <article className="video-block">
        <video
            className={"video-block__video"}
    ref={videoRef}
    muted={true}
    width={width}
    height={height}
    src={src}
    poster={poster}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}


    />

    <section className="video-block__order">
    <div className="video-block__order__wrapper">
    <section className="video-block__order__headline-container">
    <div className="video-block__order__badge"/>
    <h1 className="video-block__order__headline"> Процесс
    производства</h1>
    </section>
    <p className="video-block__order__text">По просьбам наших любимых фолловеров
    мы сняли для вас подробное видео о
    том, как появляются наши товары.</p>
    <Link  to={`/form`} className="video-block__order__button">СДЕЛАТЬ ЗАКАЗ</Link>
    </div>
    </section>
    </article>
)
};
