import React, { useState, useEffect } from "react";
import { debounce } from "../utilities/debounce";
import Logo from "../assets/images/logo.png";
import "./nav.scss";
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className="tops">
      <div
        className="topNav"
        style={{
          top: visible ? "0" : "-70px",
          backgroundColor:
            prevScrollPos < 40 ? "transparent" : "rgb(249 250 251 /1)",
          boxShadow:
            prevScrollPos < 40 ? "none" : "2px 2px 2px 1px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="navall">
          <div className="logo">
            <a href="./">
              <img src={Logo} alt="HB" />
            </a>
          </div>
          <div className="navs">
            {/* <div className="one">
              <ul>
                <li>
                  <a href="google.com">About</a>
                </li>
                <li>
                  <a href="google.com">Experience</a>
                </li>
                <li>
                  <a href="google.com">Work</a>
                </li>
              </ul>
            </div> */}
            <div className="two">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/10Y_KMZT8J38q-GoY7AyCLk_vLFDgob81IE4oX7rRsAY/edit?usp=share_link"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
