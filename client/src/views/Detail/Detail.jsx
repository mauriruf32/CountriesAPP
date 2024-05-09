import React, { useState, useEffect } from "react";
import style from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { countries as dummyData } from "../../utils/dummyData";

const Detail = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios(`http://localhost:3001/countries/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCountry(data);
        } else {
          window.alert("No hay países con ese ID");
        }
        setLoading(false);
      }
    ).catch(error => {
      console.error("Error fetching data:", error);
      setLoading(false);
    });
  }, [id]);

  // Si no se pudo cargar desde la API, usar datos ficticios
  useEffect(() => {
    if (Object.keys(country).length === 0 && !loading) {
      const foundCountry = dummyData.find(c => c.id === id);
      if (foundCountry) {
        setCountry(foundCountry);
      } else {
        window.alert("No hay países con ese ID");
      }
    }
  }, [country, id, loading]);

  // Si aún se está cargando, mostrar mensaje de carga
  if (loading) {
    return <div className={style.loading}>Cargando...</div>;
  }

  return (
    <div className={style.container}>
      <img className={style.bandera} src={country.flag} alt="country detail" />
      <div className={style.detail}>
        <h1 className={style.name}>{country.name}</h1>
        <h2>{country.id}</h2> 
        <h2>Continente: {country.continent}</h2>
        <h2>Capital: {country.capital}</h2>
        <h2>Subregión: {country.subregion}</h2>
        <h2>Área: {country.area}</h2>
        <h2>Población: {country.population}</h2>
      </div>
    </div>
  );
};

export default Detail;



