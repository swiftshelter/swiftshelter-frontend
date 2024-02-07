import searchBtn from "../../assets/images/2-hero/search-btn.svg";
import "./hero.scss";
const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero__header">Discover your perfect rental</h1>
      <div>
        <ul className="hero__list">
          <li className="hero__list-item">Buy</li>
          <li className="hero__list-item">Rent</li>
          <li className="hero__list-item">Sell</li>
          <li className="hero__list-item">Pre-approval</li>
          <li className="hero__list-item">Just Sold</li>
          <li className="hero__list-item">Home Value</li>
        </ul>
        <div className="hero_input-container">
          <input
            className="hero__input-field"
            placeholder="Address, School, City, Zip, Neighborhood"
            type="text"
            name="search"
            id=""
          />
          <img className="search-btn" src={searchBtn} alt="search button" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
