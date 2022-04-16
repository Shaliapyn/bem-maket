import React from "react";
import { FaPhoneAlt } from "react-icons/fa"
import { BsEnvelopeFill } from "react-icons/bs"

import ContactUs from "../ContactUs/ContactUs";
import map from "./imgs/map.png";
import { IconContext } from "react-icons";

const MainBody = () => {
  return (
    <div className="main-body">
      <div className="main-body__container">
        <h2 className="main-body__title">
          We are always in touch and will be happy to resolve any of your
          questions.
        </h2>
        <div className="main-body__map-contact">
          <img src={map} alt="" />
          <ContactUs />
        </div>
      </div>
      <div className="main-body__container">
        <div className="main-body__contacts">

          <hr className="horisontal-line--blue" />
          <IconContext.Provider value={{color: "#008DFE", size: "1.3em"}}>
          <ul className="main-body__email-phone">
            <li className="main-body__li-block-numb main-body__li">
              <h2 className="main-body__li--title">Phone</h2>
              <FaPhoneAlt className="main-body__icon"/><span className="main-body__li--numb">+34 965 020784</span>
            </li>
            <li className="main-body__li-block-text main-body__li">
              <h2 className="main-body__li--title">Office in Spain</h2>
              <p className="main-body__li-block-text--text">
                Centro Comercial Playa Flamenca C / Niagara, 63 Local 60/PB,
                first floor, 03189 - Orihuela Costa (Alicante), Spain
              </p>
            </li>
            <li className="main-body__li--email main-body__li">
              <h2 className="main-body__li--title">E-mail</h2>
              <BsEnvelopeFill className="main-body__icon"/><a href="https://www.google.com.ua/">sales@wtgspain.com</a>
            </li>
          </ul>
          </IconContext.Provider>
          <hr className="horisontal-line--blue" />

          <div className="main-body__social-networks-block">
            <h2 className="main-body__li--title">We are online</h2>
            <ul className="main-body__social-networks">
              <li className="main-body__social-network--whatsup social-network-li">
              </li>
              <li className="main-body__social-networks--viber social-network-li">
                f
              </li>
              <li className="main-body__social-networks--fb social-network-li">
                f
              </li>
              <li className="main-body__social-networks--tg social-network-li">
                f
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
