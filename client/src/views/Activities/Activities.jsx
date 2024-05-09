import React, { useState, useEffect } from "react";
import style from "./Activities.module.css";
import axios from "axios";
import { activities as dummyActivities } from "../../utils/dummyData";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:3001/activities')
      .then((response) => {
        setActivities(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching activities:', error);
        setLoading(false);
      });
  }, []);

  // Si no se pudo cargar desde la API, usar datos ficticios
  useEffect(() => {
    if (activities.length === 0 && !loading) {
      setActivities(dummyActivities);
    }
  }, [activities, loading]);

  // Si aún se está cargando, mostrar mensaje de carga
  if (loading) {
    return <div>Cargando actividades...</div>;
  }

  return (
    <div>
      <h2 className={style.title}>Activities List:</h2>
      <ul className={style.container}>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
            <p>Difficulty: {activity.difficulty}</p>
            <p>Duration: {activity.duration} hours</p>
            <p>Season: {activity.season}</p>
            <p>Countries: </p>
            <ul>
              {activity.countries.map((country, index) => (
                <li key={index}>
                  {country}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
