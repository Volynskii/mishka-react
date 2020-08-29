import './reviews.scss'
import React from "react";

export const Reviews = () => {

    return (
       <article className="reviews">
           <div className="reviews__wrapper">
<span className="reviews__headline">Отзывы</span> <button className="reviews__button">Написать</button>

               <p className="reviews__comment">Я молодая мама, но всё равно фотографии не набирали
                   и близко такого количества лайков,
                   как у популярных инстамамочек. В отчаянии,
                   я накупила аксессуаров и игрушек в Мишке,
                   и мои фотографии сразу стали более стильными,
                   а также набирают больше лайков!</p>

               <ul className="reviews__author">
               <li className="reviews__author__name">Анастасия Красильникова</li>
                   <li className="reviews__author__email">@misssssiskras</li>
               </ul>
               <ul className="reviews__slider">
                   <li className="reviews__slider__left"/>
                   <li className="reviews__slider__right"/>
               </ul>


           </div>
       </article>
    )
};
