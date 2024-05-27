import React, { useEffect, useState } from "react";

const CountryList = ({ searchTerm }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("/data/countries.json");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filterCountries = () => {
      if (searchTerm) {
        const filtered = countries.filter((country) =>
          country.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCountries(filtered);
      } else {
        setFilteredCountries(countries);
      }
    };

    filterCountries();
  }, [searchTerm, countries]);

  return (
    <ul>
      {filteredCountries.map((country, index) => (
        <li key={index}>{country.title}</li>
      ))}
    </ul>
  );
};

export default CountryList;