import React from "react";
import styles from "./About.module.css";
import mauri from "../../imagenes/mauri.jpeg";
import SocialMedia from "../../components/SocialMedia/SocialMedia";


const About = () => {

  return (
    <div className={styles.conteiner}>
      <img className={styles.globo} src={mauri} alt="Mauri" />
      <div className={styles.social}>
    <SocialMedia/>
    </div>
      <div className={styles.texto}>   
        <h1>Hello, my name is Mauricio, and I hope you are enjoying the Countries API I've created.</h1>
        <h2> This website was developed as part of my individual project for the SoyHenry bootcamp, 
          and I'm pleased to share that it was successfully approved. </h2>
          <h2> Here, you can explore cards representing over 200 countries. By clicking on them, you can access detailed information about each country,
           including its capital, area or territory, subregion, and more.
            The platform features a form that allows you to create tourist 
            activities and associate them with any country or countries. </h2>
            <h2> Additionally, you have the option to search for a country by its name or initials, 
              apply filters based on continent or tourist activities, and sort the cards in ascending or descending order
               by population size or alphabetically. 
              I hope you find the website informative and user-friendly.</h2>

      </div>
    </div>
  );
};



export default About;