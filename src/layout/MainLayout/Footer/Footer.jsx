import React from "react";
import { Link } from "react-router-dom";

import bg from "~/assets/footer-bg.jpg";
import logo from "~/assets/dnsmovie.png";

import "./Footer.scss";

const FOOTER_MENU = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Contact us",
    path: "/",
  },
  {
    display: "Term of services",
    path: "/",
  },
  {
    display: "About us",
    path: "/",
  },
  {
    display: "Live",
    path: "/",
  },
  {
    display: "FAQ",
    path: "/",
  },
  {
    display: "Premium",
    path: "/",
  },
  {
    display: "Pravacy policy",
    path: "/",
  },
  {
    display: "You must watch",
    path: "/",
  },
  {
    display: "Recent release",
    path: "/",
  },
  {
    display: "Top IMDB",
    path: "/",
  },
];

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container" data-aos="fade-up">
        <div className="footer__content__logo">
          <div className="logo" data-aos="fade-up">
            <img src={logo} alt="Logo" />
            <Link to="/">DNS-Movies</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            {FOOTER_MENU.slice(0, 4).map((item, index) => (
              <Link key={index} to={item.path}>
                {item.display}
              </Link>
            ))}
          </div>
          <div className="footer__content__menu">
            {FOOTER_MENU.slice(4, 8).map((item, index) => (
              <Link key={index} to={item.path}>
                {item.display}
              </Link>
            ))}
          </div>
          <div className="footer__content__menu">
            {FOOTER_MENU.slice(8, 11).map((item, index) => (
              <Link key={index} to={item.path}>
                {item.display}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
