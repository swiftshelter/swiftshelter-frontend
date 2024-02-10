import React from "react";
import Card from "./Card";
import { cards } from "./../../lib/data";

const NewestListings = ({ handleVisibility }) => {
  return (
    <section className="newestlistings">
      <header>
        <h1 onClick={handleVisibility}>Newest listings</h1>
        <p>See the most up-to-date listings</p>
      </header>
      <div className="card-container">
        {cards.newestListingData?.map((card) => {
          return (
            <section key={card.id}>
              <Card card={card} key={card?.id} />
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default NewestListings;
