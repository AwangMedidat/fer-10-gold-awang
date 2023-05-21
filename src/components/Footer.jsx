import React from "react";
import logoFB from "../images/logo/fb-logo.png";
import logoIG from "../images/logo/ig-logo.png";
import logoTW from "../images/logo/tw-logo.png";
import logoMAIL from "../images/logo/mail-logo.png";
import logoTTH from "../images/logo/tt-logo.png";

function Footer() {
  return (
    <div>
      <section id="footer" className="footer">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
            <div className="fw-bold d-flex flex-column gap-2">
              <div>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
              <div>binarcarrental@gmail.com</div>
              <div>081-233-334-808</div>
            </div>
            <div className="menu">
              <ul className="list-unstyled d-flex flex-column gap-3">
                <li>Our Services</li>
                <li>Why Us</li>
                <li>Testimonial</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <div className="fw-bold mb-2">Connect with us</div>
              <div className="d-flex gap-2">
                <span className="icon">
                  <img src={logoFB} alt="" />
                </span>
                <span className="icon">
                  <img src={logoIG} alt="" />
                </span>
                <span className="icon">
                  <img src={logoTW} alt="" />
                </span>
                <span className="icon">
                  <img src={logoMAIL} alt="" />
                </span>
                <span className="icon">
                  <img src={logoTTH} alt="" />
                </span>
              </div>
            </div>
            <div>
              <div className="fw-bold mb-2">Copyright Binar 2023</div>
              <div>
                <span className="logo"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
