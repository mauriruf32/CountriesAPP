import React, { useState } from "react";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = ({ countries }) => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    // Calcula el índice inicial y final de los países a mostrar en la página actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Divide la lista de países en grupos de acuerdo al paginado
    const paginatedCountries = countries.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={style.container}>

            <div className={style.pagination}>
                {Array.from({ length: Math.ceil(countries.length / itemsPerPage) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={index + 1 === currentPage ? style.active : ""}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            {paginatedCountries.map((country) => (
                <Card key={country.id} country={country} />
            ))}
        </div>
    );
};

export default Cards;

// import Card from "../Card/Card";
// import style from  "./Cards.module.css";
// // import  { useSelector } from "react-redux"

// const Cards = ({countries}) =>{

//     // const countries = useSelector(state=>state.countries)

//     const countriesList = countries;

//     return(
//         <div className={style.container}>
//             {countriesList?.map((country)=>(
//             <Card country={country}/>
//             ))}
//         </div>
//     )
// }

// export default Cards;