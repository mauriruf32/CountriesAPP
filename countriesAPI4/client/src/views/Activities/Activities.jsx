import React, { useState, useEffect } from "react";
// import styles from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getActivities, getCountries } from "../../redux/actions";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Realiza una solicitud GET a la ruta /activities en tu servidor
    axios.get('/activities')
      .then((response) => {
        setActivities(response.data); // Asigna los datos de las actividades a la variable de estado
      })
      .catch((error) => {
        console.error('Error fetching activities:', error);
      });
  }, []);

  return (
    <div>
      <h2>Activities List</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <h3>{activity.name}</h3>
            <p>Difficulty: {activity.difficulty}</p>
            <p>Duration: {activity.duration} hours</p>
            <p>Season: {activity.season}</p>
            <p>Countries:</p>
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
