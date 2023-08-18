import React, { useState, useEffect } from "react";
import style from "./Activities.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getActivities, getCountries } from "../../redux/actions";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/activities')
      .then((response) => {
        setActivities(response.data); 
      })
      .catch((error) => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  return (
    <div>
      <h2 className={style.title}>Lista de Actividades:</h2>
      <ul className={style.container}>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
            <p>Dificultad: {activity.difficulty}</p>
            <p>Duración: {activity.duration} horas</p>
            <p>Temporada: {activity.season}</p>
            <p>Paises: </p>
            <ul>
              {activity.Countries.map((country) => (
                <li key={country.id}>{country.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
