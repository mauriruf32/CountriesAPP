import React, { useState, useEffect } from "react";
// import styles from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Activities = ({Activities}) => {
  const { id } = useParams();
  const [activity, setActivity] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/activities/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setActivity(data);
        } else {
          window.alert("No hay actividades");
        }
      }
    );
    return setActivity({});
  }, [id]);

  return (
//     <div>
//       <h1>{activity.name}</h1><h2>{activity.id}</h2>
//       <img src="" alt="activity detail" />
//       <div>
//       <h2>Dificultad: {activity.difficulty}</h2>
//       <h2>Duracion: {activity.duration}</h2>
//       <h2>Temporada: {activity.season}</h2>
//     </div>
//     </div>
<div>{myFavorites?.map(({ id, name, status, species, gender, origin, image }) => (<Card
    key={id}
    id={id}
    name={name}
    status={status}
    species={species}
    gender={gender}
    origin={origin.name}
    image={image}
  />))}</div>
  );
};

export default Activities;
