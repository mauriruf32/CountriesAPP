import React, { useState, useEffect } from "react";
import style from "./Activities.module.css";
import axios from "axios";

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
              {activity.Countries.map((country) => (
                <li key={country.id}>
                  {country.name}
                <img className={style.detailBandera} src={country.flag} alt="Bandera:" /></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
