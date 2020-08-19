import './reviews.css'
import React from "react";

export const Reviews = () => {

    return (
       <article className="reviews">
           <div className="reviews__wrapper">
<span>Отзывы</span><button>Написать</button>

               <p>Я молодая мама, но всё равно фотографии не набирали
                   и близко такого количества лайков,
                   как у популярных инстамамочек. В отчаянии,
                   я накупила аксессуаров и игрушек в Мишке,
                   и мои фотографии сразу стали более стильными,
                   а также набирают больше лайков!</p>

               <ul>
               <li>Анастасия Красильникова</li>
                   <li>@misssssiskras</li>
               </ul>
               <ul>
                   <li>лево</li>
                   <li>право</li>
               </ul>


           </div>
       </article>
    )
};
