import React from "react";
import { BsHeartFill, BsWhatsapp } from "react-icons/bs";

import flag from "./imgs/united-kingdom.png";
import logo from "./imgs/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__contacts-language">
        <div className="header-container">
          <ul className="header__contacts">
            <li className="header__contacts-email-block contact-block">
              <a
                className="contact-block__text"
                href="https://www.google.com.ua/"
              >
                sales@wtgspain.com
              </a>
            </li>
            <li className="header__contacts-numb-block contact-block">
              <a
                className="contact-block__text"
                href="https://www.google.com.ua/"
              >
                +34 965 020784
              </a>
            </li>
            <li className="header__contacts-watsup-block contact-block">
              <a
                className="contact-block__text"
                href="https://www.google.com.ua/"
              >
                <BsWhatsapp className="header-ws-icon" size="1.2em" />
                WhatsApp
              </a>
            </li>
          </ul>
          <div className="header__language">
            <BsHeartFill color="#8097CB" size="1.6em" />
            <img className="header__language--flag" src={flag} alt="" />
          </div>
        </div>
      </div>
      <div className="header-nav-logo">
        <div className="header-container">
          <img className="header-van-logo__logo" src={logo} alt="" />
          <div className="header-nav__nav-sign">
            <ul className="header-nav__list">
              <li className="header-nav__list--li">Cities</li>
              <li className="header-nav__list--li">Properties</li>
              <li className="header-nav__list--li">Blog</li>
              <li className="header-nav__list--li">Video</li>
              <li className="header-nav__list--li">Contacts</li>
            </ul>
            <ul className="header-nav__login">
              <li className="header-nav__signin">Sign In</li>
              <li className="vertical-line">|</li>
              <li className="header-nav__signup">Sign Up</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
