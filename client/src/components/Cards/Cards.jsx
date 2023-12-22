import React, { useState } from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ countries }) => {
  const cardsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const paginatedCountries = countries.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={style.container}>
      {paginatedCountries.map((country) => (
        <Card key={country.id} country={country} />
      ))}
      <div className={style.pagination}>
        {Array.from({ length: Math.ceil(countries.length / cardsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`${style.pageButton} ${index + 1 === currentPage ? style.active : ""}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Cards;
