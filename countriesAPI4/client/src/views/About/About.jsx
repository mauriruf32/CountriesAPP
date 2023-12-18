import React from "react";
import styles from "./About.module.css";
import globo from "../../imagenes/globo2.gif";


const About = () => {

  
  return (
    <div className={styles.conteiner}>
      <img className={styles.globo} src={globo} alt="Globo" />
      <div className={styles.texto}>
        <h1>Hola, mi nombre es Mauricio y espero esten disfrutando de mi Api de Countries.</h1>
        <h2>Esta web fue creada como parte del proyecto individual para el bootcamp de SoyHenry, 
          el cual fue aprobado con exito.
        Aqui pueden visualizar cards de mas de 200 paises, haciendo click 
        en ellas acceden a un detalle de ese pais, alli encontraran informacion 
        adicional como su capital, area o territorio, subregion, etc. 
        Cuenta con un formulario para crear activiades turisticas y agregar cualquier pais o paises. 
        Ademas podran buscar un pais por su nombre o iniciales, filtrar por continente y por activiades turisticas.
        Tambien se puede ordenar las cards de manera ascendente o descendente por cantidad de poblacion 
        y alfabeticamente.</h2>
      </div>
    </div>
  );
};



export default About;