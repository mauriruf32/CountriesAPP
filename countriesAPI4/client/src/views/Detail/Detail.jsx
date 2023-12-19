import React, { useState, useEffect } from "react";
import style from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Fetch country details
    axios(`http://localhost:3001/countries/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCountry(data);
          // Fetch activities for the country
          return axios.get(`http://localhost:3001/activities`);
        } else {
          window.alert("No hay países con ese ID");
        }
      })
      .then((response) => {
        if (response) {
          setActivities(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div className={style.container}>
      <img src={country.flag} alt="country detail" />
      <div className={style.detail}>
        <h1>{country.name}</h1>
        <h2>{country.id}</h2>
        <h2>Continente: {country.continent}</h2>
        <h2>Capital: {country.capital}</h2>
        <h2>Subregión: {country.subregion}</h2>
        <h2>Área: {country.area}</h2>
        <h2>Población: {country.population}</h2>

        {/* Display activities if available */}
        {activities.length > 0 && (
          <div>
            <h2>Actividades:</h2>
            <ul>
              {activities.map((activity) => (
                <li key={activity.id}>
                  <h3>{activity.name}</h3>
                  <p>Dificultad: {activity.difficulty}</p>
                  <p>Duración: {activity.duration} horas</p>
                  <p>Temporada: {activity.season}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
