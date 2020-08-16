import React from "react";
import {NavLink} from "react-router-dom";

export const Header = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Note App
        </div>
        <ul className="navbar-nav">
            <li className="navbar-item">
            <NavLink className="nav-link" to="/main" exact>
                Главная
            </NavLink>
        </li>
            <li className="navbar-item">
                <NavLink className="nav-link" to="/form">
                    Форма
                </NavLink>
            </li>
            <li className="navbar-item">
                <NavLink className="nav-link" to="/catalog">
                    Каталог
                </NavLink>
            </li>
        </ul>
    </nav>
)
