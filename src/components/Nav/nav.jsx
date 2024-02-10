// import images
import { useState } from "react";
import brandIcon from "../../assets/images/1-nav/house-key-icon.svg";
import userAvatar from "../../assets/images/1-nav/user-avatar.svg";
import "./nav.scss";
import { Link } from "react-router-dom";

const Nav = ({ handleVisiblity }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleNavVisiblity = () => {
    setIsVisible(!isVisible);
  };

  // conditional rendering of the navigation list items
  const navList = ["Buy", "Sell", "Rent", "Find Home Owners"];
  const NavList = ({ navList }) => {
    return (
      <ul className={`nav__list ${isVisible && "nav__list-visible"}`}>
        {navList.map((listitem, index) => (
          <li key={index} className="nav__list-item">
            <a href="">{listitem}</a>
          </li>
        ))}
        <button onClick={handleVisiblity} className="login-button">
          Login
        </button>
        <button onClick={handleVisiblity} className=" signup-button">
          Sign Up
        </button>
      </ul>
    );
  };

  return (
    <nav className="nav">
      {/* the nav-toggler icon should change based on `isVisible` state variable */}
      <span onClick={handleNavVisiblity} className="nav__toggle-icon">
        {isVisible ? <>&times;</> : <>&equiv;</>}
      </span>

      <Link to="/">
        <figure className="brand-image-container">
          <img className="brand-image" src={brandIcon} alt="" />
          <span className="brand-name">swiftshelter</span>
        </figure>
      </Link>

      <NavList navList={navList} />

      <figure className="user-profile-image">
        <img src={userAvatar} alt="user image" tabIndex={0} />
      </figure>
    </nav>
  );
};

export default Nav;
