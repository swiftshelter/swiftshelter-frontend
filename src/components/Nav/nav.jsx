// import images
import { useState } from "react";
import keyIcon from "../../assets/images/1-nav/house-key-icon.svg";
import userAvatar from "../../assets/images/1-nav/user-avatar.svg";
import "./nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleNavVisiblity = () => {
    setIsVisible(!isVisible);
  };

  // conditional rendering of the navigation list items
  const navList = ["Buy", "Sell", "Rent", "Find Home Owners", "Login"];
  const NavList = ({ navList }) => {
    return (
      <ul className={`nav__list ${isVisible && "nav__list-visible"}`}>
        {navList.map((listitem, index) => (
          <li key={index} className="nav__list-item">
            <a href="">{listitem}</a>
          </li>
        ))}
        <button className=" signup-button">
          <a href="">Sign Up</a>
        </button>
      </ul>
    );
  };

  return (
    <nav className="nav">
      <span onClick={handleNavVisiblity} className="nav__toggle-icon">
        &equiv;
      </span>

      <Link to="/">
        <figure className="brand-image-container">
          <img className="brand-image" src={keyIcon} alt="" />
          <span className="brand-name">swiftshelter</span>
        </figure>
      </Link>

      <NavList navList={navList} />

      <div className="user-profile-image">
        <img src={userAvatar} alt="user image" tabIndex={0} />
      </div>
    </nav>
  );
};

export default Nav;
