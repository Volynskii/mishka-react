import './our-contacts.scss'
import React from "react";

export const OurContacts = () => {

    return (
        <article className="our-contacts">
            <section className="our-contacts__contacts">
                <div className="our-contacts__contacts__wrapper">
                    <h2 className="our-contacts__contacts__headline">Контакты</h2>
                    <table className="our-contacts__contacts__table">
                        <tbody className="our-contacts__contacts__table__wrapper">
                        <tr className="our-contacts__contacts__table__list">
                            <td className="our-contacts__contacts__table__param">e-mail:</td>
                            <td className="our-contacts__contacts__table__param-two">info@mimimishkashop.ru</td>
                        </tr>
                        <tr className="our-contacts__contacts__table__list">
                            <td className="our-contacts__contacts__table__param-second">
                                адрес:</td>
                            <td className="our-contacts__contacts__table__param-two">г. Санкт-Петербург,
                                ул. Большая Конюшенная,
                                д. 19/8, офис 101</td>
                        </tr>
                        </tbody>
                    </table>
                    <button className="our-contacts__contacts__button">НАПИШИТЕ НАМ</button>
                </div>
            </section>
            <section className="our-contacts__map">
                <article id="map">
                </article>

                <script src="../map/map.js"></script>
                <script async defer
                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBme58AN9wAyTA0qRNM7P2pJ-zW0tA9Cww&callback=initMap">
                </script>
            </section>
            <button className="our-contacts__bottom-button">НАПИШИТЕ НАМ</button>
        </article>
    )
};
