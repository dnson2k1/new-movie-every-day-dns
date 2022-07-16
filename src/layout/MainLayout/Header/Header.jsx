import React, { useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import logo from "~/assets/dnsmovie.png";
import "./Header.scss";

const HEADER_NAV = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movie",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = HEADER_NAV.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const headerShrink = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", headerShrink);

    return () => {
      window.removeEventListener("scroll", headerShrink);
    };
  }, []);

  return (
    <header ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <Link to="/">DNS-Movie</Link>
        </div>
        <ul className="header__nav">
          {HEADER_NAV &&
            HEADER_NAV.map((item, index) => (
              <li key={index} className={`${index === active ? "active" : ""}`}>
                <Link to={item.path}>{item.display}</Link>
              </li>
            ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
