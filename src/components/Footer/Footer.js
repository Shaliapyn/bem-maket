import React from "react";

import { IconContext } from "react-icons";
import { IoIosPhonePortrait } from "react-icons/io";
import { BsEnvelopeFill, BsStarFill, BsYoutube, BsLinkedin } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa"
import { ImInstagram } from "react-icons/im"

import logo from "./imgs/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <img className="footer__logo" src={logo} alt="" />
        <h2 className="footer__title">
          <span className="weight-title">THE BEST</span> REAL ESTATE IN SPAIN
        </h2>
        <hr className="footer__horisontal-line" />
        <div className="footer__navigation">
          <span className="footer__navigation--cities">All cities</span>
          <span className="footer__navigation--blog">Blog</span>
          <span className="footer__navigation--video">Video</span>
          <span className="footer__navigation--contacts">Contacts</span>
        </div>
        <div className="footer__last-three-blocks">
          <div className="footer__contacts-block">
            <h2 className="footer__contacts--title last-block__title">Contacts</h2>
            <ul className="footer__contacts-list">
            <IconContext.Provider value={{size: "1.4em"}}>
              <li>
                <IoIosPhonePortrait className="phone-icon" size="1.6em" />
                {"+34 (965) 020 - 784"}
              </li>
              <li>
                <BsEnvelopeFill className="envelop-icon" />
                {"sales@wtgspain.com"}
              </li>
              <li className="footer__contacts-list--li">
                <MdLocationOn className="location-icon" size="1.7em" />
                <span className="footer__location-text">
                  Centro Comercial «Playa Flamenca» C/ Niagara, 63 Local 60/PB,
                  first floor, 03189 - Orihuela Costa (Alicante), Spain
                </span>
              </li>
              </IconContext.Provider>
              <li>
                <ul className="footer__contacts--rate">
                  <li>Reating: 4.9/5</li>
                  <li>
                    <IconContext.Provider
                      value={{ color: "#2B66FA", size: "1.3em" }}
                    >
                      <ul className="footer__contacts--star-list">
                        <li>
                          <BsStarFill />
                        </li>
                        <li>
                          <BsStarFill />
                        </li>
                        <li>
                          <BsStarFill />
                        </li>
                        <li>
                          <BsStarFill />
                        </li>
                        <li>
                          <BsStarFill />
                        </li>
                      </ul>
                    </IconContext.Provider>
                  </li>
                  <li>820 votes</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="footer__type-block">
            <h2 className="footer__type--title last-block__title">Type</h2>
            <ul className="footer__type-list">
              <li>Apartaments</li>
              <li>Penthousses</li>
              <li>Townhouses</li>
              <li>Commercial</li>
              <li>Bongalows</li>
              <li>Duplaxes</li>
              <li>Villas</li>
            </ul>
          </div>
          <div className="footer__networks-block">
            <h2 className="footer__networks--title last-block__title">Follow us:</h2>
            <IconContext.Provider value={{ size: "1.7em" }}>
            <ul className="footer__networks-list">
              <li className="footer__networks-list--li"><FaFacebookSquare className="footer__networks-block--icon fb-icon" size="1.8em"/>{"Facebook"}</li>
              <li className="footer__networks-list--li"><BsYoutube className="footer__networks-block--icon yt-icon"/>{"YouTube"}</li>
              <li className="footer__networks-list--li"><BsLinkedin className="footer__networks-block--icon lk-icon"/>{"Linkedin"}</li>
              <li className="footer__networks-list--li"><ImInstagram className="footer__networks-block--icon insta-icon"/>{"Instagram"}</li>
            </ul>
            </IconContext.Provider>
            <form className="footer__networkds-form">
              <h2 className="footer__networkds-form--title">Subscribe to new objects</h2>
              <div className="footer__networks--subscribe">
                <input className="footer__networks-form--inp" type="text" placeholder="Your text" />
                <button className="footer__networks-form--btn">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <span className="footer__last-text">The company "WTG Spain" specializes in the investment and sale of real estate in Spain, and the provision of legal and consulting services.
All rights reserved. "WTG Spain" - The Best Real Estate in Spain. © Copyright 2007 - 2020.</span>
      </div>
    </div>
  );
};

export default Footer;
