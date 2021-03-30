import React from "react";
// * this component will contain all the data's fetched from the api
import SingleCard from "./SingleCard";

const Cards = ({ data }) => {
  const { confirmed, deaths, lastUpdate, recovered } = data;
  if (!confirmed || !deaths || !lastUpdate || !recovered) {
    return "Loading...";
  }
  return (
    <>
      <div className="card_container">
        <div className="container">
          <div className="card_content_wrapper">
            {/*  */}

            <SingleCard
              category="infected"
              title="Infected"
              amount={confirmed.value}
              lastUpdate={new Date(lastUpdate).toDateString()}
            />

            <SingleCard
              category="death"
              title="Deaths"
              amount={deaths.value}
              lastUpdate={new Date(lastUpdate).toDateString()}
            />

            <SingleCard
              category="recovered"
              title="Recoverd"
              amount={recovered.value}
              lastUpdate={new Date(lastUpdate).toDateString()}
            />

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
