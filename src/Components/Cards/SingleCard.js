import React from "react";
import CountUp from "react-countup";

const SingleCard = (prop) => {
  return (
    <>
      <div className={`single_card ${prop.category}`}>
        <p>{prop.title}:</p>
        <h2>
          <CountUp duration={2} separator="," start={0} end={prop.amount} />
        </h2>
        <p className="last_update_p">{prop.lastUpdate}</p>
        <p>
          <a
            href="https://covid19.mathdro.id/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            By covid-19 api
          </a>
        </p>
      </div>
    </>
  );
};

export default SingleCard;
