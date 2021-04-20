import './video-block.scss';
import React from "react";
import {VideoPlayer} from "./components/video-player";
import {Link} from "react-router-dom";

type videoBlockContainerProps = {

}

export const VideoBlock: React.FC<videoBlockContainerProps> = ({
         }) => {


    return (
        <article className="video-block">
            <div className="video-block__video">
            <VideoPlayer
            />
            </div>

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
    <Link to={`/form`} className="video-block__order__button">СДЕЛАТЬ ЗАКАЗ</Link>
    </div>
    </section>
    </article>
)
};
