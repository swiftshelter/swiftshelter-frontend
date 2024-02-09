// added tabIndex to make this section navigable with keyboard

import React from "react";
import Facebook from "../assets/svg/fb.svg";
import X from "../assets/svg/x.svg";
import Linkedin from "../assets/svg/linkedin.svg";
import Instagram from "../assets/svg/instagram.svg";
import Pintrest from "../assets/svg/pintrest.svg";
import Youtube from "../assets/svg/youtube.svg";
import Google from "../assets/svg/playstore-badge.svg";
import Apple from "../assets/svg/appstore-badge.svg";

const Footer = () => {
  // dynamically render the social links elements
  const socialLinksArray = [
    Facebook,
    X,
    Linkedin,
    Instagram,
    Pintrest,
    Youtube,
  ];
  const SocialLinks = () => {
    return (
      <div className="social-icons-container">
        {socialLinksArray.map((element, index) => (
          <a key={index} className="icon" href="#" tabIndex="0">
            <img src={element} alt={element} />
          </a>
        ))}
      </div>
    );
  };

  return (
    <footer>
      <SocialLinks />
      <nav>
        <ul>
          <li tabIndex="0">About us</li>
          <li tabIndex="0">Careers</li>
          <li tabIndex="0">Accessibilities</li>
          <li tabIndex="0">Feedback</li>
          <li tabIndex="0">Terms</li>
          <li tabIndex="0">Tech Blog</li>
          <li tabIndex="0">Agent Blog</li>
        </ul>
      </nav>

      <section className="get-app">
        <p>Get the app (coming soon...)</p>
        <figure className="get-app__icons">
          <a href="#" tabIndex="0" aria-label="Download on the App Store">
            <img
              className="get-on-appstore"
              src={Apple}
              alt="get it on the app store icon."
            />
          </a>
          <a href="#" tabIndex="0" aria-label="Get it on Google Play Store">
            <img
              className="get-on-playstore"
              src={Google}
              alt="get it on google playstore icon."
            />
          </a>
        </figure>
      </section>
    </footer>
  );
};

export default Footer;
