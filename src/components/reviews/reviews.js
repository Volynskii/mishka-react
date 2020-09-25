import './reviews.scss'
import React, {Component} from "react";

 class Reviews extends Component {

render() {

    const {comments, index, onNext, onSub} = this.props;

    return (
        <article className="reviews">
            <div className="reviews__wrapper">
                <span className="reviews__headline">Отзывы</span>
                <button className="reviews__button">Написать</button>

                <p className="reviews__comment">{comments[index].comment}</p>

                <ul className="reviews__author">
                    <li  className="reviews__author__name">{comments[index].author}</li>
                    <li className="reviews__author__email">{comments[index].email}</li>
                </ul>
                <section className="reviews__slider">
                    <button     onClick={() => onNext()} className="reviews__slider__left"/>
                    <button   onClick={() => onSub()}  className="reviews__slider__right"/>
                </section>
            </div>
        </article>
    )
}
}

 export default Reviews;
