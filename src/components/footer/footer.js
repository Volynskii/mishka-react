import React, {Component} from "react";
import './footer.scss'
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (

            <article className="footer">
                <section className="footer__wrapper">
                    <Link to="/" className="footer__wrapper__logotype"> </Link>
                    <div className="footer__wrapper__social-media">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/?hl=ru" className="footer__wrapper__social-media__instagram"> </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/" className="footer__wrapper__social-media__facebook"> </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/" className="footer__wrapper__social-media__twitter"> </a>
                    </div>
                    <div className="copyright">
                        <div className="copyright__name">Разработано</div>
                        <a target="_blank" rel="noopener noreferrer" href="https://htmlacademy.ru/study" className="copyright__logotype"> </a>
                    </div>
                </section>
            </article>
        )
    }
};
