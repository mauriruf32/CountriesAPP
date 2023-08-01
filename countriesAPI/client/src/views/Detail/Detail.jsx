

import React, { useState, useEffect } from "react";
import style from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCountry(data);
        } else {
          window.alert("No hay countries con ese ID");
        }
      }
    );
    return setCountry({});
  }, [id]);

  return (
    <div className={style.detail}>
      <img src={country.flag} alt="country detail" />
      <div className={style.text}>
      <h1>{country?.name}</h1>
      <h2>{country?.continent}</h2>
      <h2>{country?.capital}</h2>
      <h2>{country?.subregion}</h2>
      <h2>{country?.area}</h2>
      <h2>{country?.population}</h2>
    </div>
    </div>
  );
};

export default Detail;


// const Detail = () => {
//     return (
//         <>
//             <h1>Esta es la Detail</h1>
//         </>
//     )
// }

// export default Detail;