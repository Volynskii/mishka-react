import './reviews.scss'
import React from "react";

export const Reviews = ({comments, index, nextComment, prevComment, toggleDisplay}) => {

    return (
        <article className="reviews">
            <div className="reviews__wrapper">
                <span className="reviews__headline">Отзывы</span>
                <button onClick={toggleDisplay} className="reviews__button">Написать</button>

                <p className="reviews__comment">{comments[index].comment}</p>

                <ul className="reviews__author">
                    <li  className="reviews__author__name">{comments[index].author}</li>
                    <li className="reviews__author__email">{comments[index].email}</li>
                </ul>
                <section className="reviews__slider">
                    <button onClick={prevComment} className="reviews__slider__left"/>
                    <button onClick={nextComment}  className="reviews__slider__right"/>
                </section>
            </div>
        </article>
    )
};


 export default Reviews;
