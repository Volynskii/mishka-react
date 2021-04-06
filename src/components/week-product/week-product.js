import React from "react";
import './week-product.scss';
import {Link} from "react-router-dom";

export const WeekProduct = () => {


        return (
            <>
            <article className="week-product">
                <section className="week-product__description">
                    <ul className="week-product__description__headline-block">
                        <li className="week-product__description__headline-block__name">ТОВАР НЕДЕЛИ
                        </li>
                        <li className="week-product__description__headline-block__headline">
                            Вязаные корзинки
                        </li>
                    </ul>
                    <div className="week-product__description__wrapper">
                        <p className="week-product__description__text">Экологически чистая пряжа, ручная работа.
                            Доступны в шести расцветках и трех размерах.</p>
                        <table className="week-product__description__price">
                            <tbody>
                            <tr>
                                <td className="week-product__description__price__param">Цвет:</td>
                                <td className="week-product__description__price__param-two">«Тиффани»/серый</td>
                            </tr>
                            <tr>
                                <td className="week-product__description__price__param">Диаметр</td>
                                <td className="week-product__description__price__param-two">25 см</td>
                            </tr>
                            <tr>
                                <td className="week-product__description__price__param">Высота:</td>
                                <td className="week-product__description__price__param-two">15 см</td>
                            </tr>
                            </tbody>

                        </table>
                        <div className="week-product__description__image"/>
                        <ul className="week-product__description__order">
                            <li className="week-product__description__order__price">Цена: 990 руб.</li>
                            <Link to="/catalog" className="week-product__description__order__button">ЗАКАЗАТЬ</Link>
                        </ul>
                    </div>
                </section>

                <section className="week-product__picture"/>
            </article>
                </>
        )

};
export default WeekProduct;
