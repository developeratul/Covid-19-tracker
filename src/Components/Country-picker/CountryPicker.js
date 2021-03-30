import React, { useEffect, useState } from "react";
import { countryData } from "../api/index";

const CountryPicker = ({ handleCountryChange }) => {
  const [country, setCountry] = useState([]);

  const fetchCountries = async () => {
    const data = await countryData();
    setCountry(data.countries);
  };

  useEffect(() => {
    fetchCountries();
  }, [setCountry]);

  return (
    <>
      <div className="country_picker">
        <div className="select_field">
          <select
            defaultValue=""
            onChange={(event) => {
              handleCountryChange(event.target.value);
            }}
            name="countrySelect"
          >
            <option value="">Global</option>
            {/* // * fetching the countries */}
            {country
              ? country.map((data, index) => {
                  return (
                    <option key={index} value={data.name}>
                      {data.name}
                    </option>
                  );
                })
              : null}
          </select>
        </div>
      </div>
    </>
  );
};

export default CountryPicker;
