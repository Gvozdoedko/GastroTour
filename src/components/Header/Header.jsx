import React from "react";
import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <div className="header__links">
                <div className="header__links__inst"><a href="/">gastrotours</a></div>
                <div className="header__links__facebook"><a href="/">gastrotours</a></div>
            </div>
        </header>
    );
}
