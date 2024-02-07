import searchBtn from "../../assets/images/2-hero/search-btn.svg";
import "./hero.scss";
const Hero = () => {
  // Defining the list items
  const listItems = [
    "Buy",
    "Rent",
    "Sell",
    "Pre-approval",
    "Just Sold",
    "Home Value",
  ];

  return (
    <section className="hero">
      <h1 className="hero__header">Discover your perfect rental</h1>
      <div>
        {/* Render the list items conditionally */}
        {listItems.length > 0 && (
          <ul className="hero__list">
            {listItems.map((item, index) => (
              <li key={index} tabIndex={0} className="hero__list-item">
                {item}
              </li>
            ))}
          </ul>
        )}
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
