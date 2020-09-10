import React, {Component} from "react";
import './footer.scss'

export default class Footer extends Component {
    render() {
        return (

            <article className="footer">
                <section className="footer__wrapper">
                    <a href="#navigation" className="footer__wrapper__logotype"> </a>
                    <div className="footer__wrapper__social-media">
                        <a href="https://www.instagram.com/?hl=ru" className="footer__wrapper__social-media__instagram"> </a>
                        <a href="https://www.facebook.com/" className="footer__wrapper__social-media__facebook"> </a>
                        <a href="https://www.twitter.com/" className="footer__wrapper__social-media__twitter"> </a>
                    </div>
                    <ul className="copyright">
                        <li className="copyright__name">Разработано</li>
                        <li className="copyright__logotype"> </li>
                    </ul>
                </section>
            </article>
        )
    }
};
