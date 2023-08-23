import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, orderCountriesByName, getActivities } from "../../redux/actions";
import style from "./Form.module.css";

const Form = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const activities = useSelector((state)=> state.activities)

    const [form, setForm ] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season: "",
        countries: [],
    });

    const [errors, setErrors] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countries:[],
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate({...form,[property]:value})

        setForm({...form,[property]:value})  
    }

    const validate = (form) => {
        if (form.name.length > 20) {
            setErrors({...errors, name: "Menos de 20 caracteres"})
        }
        else if (/.*\d+.*/.test(form.name)) {
            setErrors({...errors, name: 'El nombre no puede tener numeros'})
        }
        else if (form.difficulty > 5 || form.difficulty < 1) {
            setErrors({...errors, difficulty: 'La dificultad tiene que ser entre 1 y 5'})
        }
        else if (form.duration > 12) {
            setErrors({...errors, duration: 'La actividad debe durar 12 horas o menos'})
        }
        else if (form.season !== "Verano" || form.season !== "Invierno" || form.season !=="Primavera" || form.season !== "Otoño" ){
            setErrors({...errors,season: 'Debes seleccionar una temporada'})
        }
        else if (form.countries === ""){
            setErrors({...errors,countries: 'Debes elegir al menos 1 pais'})
        }
        else {
            setErrors({...errors, name:"", difficulty:"", duration:"", season:"", countries:[]})
        }
    } 

    const submitHandler = (event) => {
        if (form.countries==="" || form.name==="" || form.duration==="" || form.difficulty ==="" || form.season==="" || form.countries===[] ){
        event.preventDefault();
        alert("Se deben llenar todos los campos")}
        else{
        axios.post("http://localhost:3001/create", form)
        alert("Actividad creada con exito!!")
    }
    };

    useEffect(()=>{
        dispatch(getCountries());
        dispatch(getActivities());
    },[]);

    const changeHandler2=(e)=> {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        console.log(value);
        return setForm({ ...form, ["countries"]: value });
      }

      const handleOrder = function(evento){
        evento.preventDefault();
        dispatch(orderCountriesByName(evento.target.value))
      }

    return (
    <form className={style.form} onSubmit={submitHandler}>
        <h1>Crea tu propia actividad:</h1>
        <div className={style.inputbox}>
            <label>Nombre de la actividad: </label>
            <input type="text" value={form.name} onChange={changeHandler} name="name" />
            {errors.name && <span>{errors.name}</span>}
        </div>

        <div className={style.inputbox}>
            <label>Dificultad: </label>
            <input type="number" min="1" max="5" value={form.difficulty} onChange={changeHandler} name="difficulty" />
            {errors.difficulty && <span>{errors.difficulty}</span>}
        </div>

        <div className={style.inputbox}>
            <label>Duración en horas: </label>
            <input type="number" min="1" max="12" value={form.duration} onChange={changeHandler} name="duration" />
            {errors.duration && <span>{errors.duration}</span>}
        </div>
        <div className={style.inputbox}>
            <label>Temporada: </label>
                <select type="text" value={form.season} onChange={changeHandler} name="season" >
                    <option value="Invierno">Invierno</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Primavera">Primavera</option>
                    <option value="Verano">Verano</option>
                </select>
            {errors.season && <span>{errors.season}</span>}
        </div>
        <div className={style.inputbox}>
            <label>Paises donde se realiza la actividad: </label>
            <select name="order" onChange={handleOrder} className={style.select} >
             <option value="alphabetA">Nombres (A-Z)</option>
             <option value="alphabetZ">Nombres (Z-A)</option>
            </select>
            <select type="text" value={form.countries} name="countries" onChange={changeHandler2}  multiple required>
                  {countries.map((country) => {
                    return (<option key={country.id} value={country.id}>{" "} {country.name} </option> );
                  })}
            </select>
            {errors.countries && <span>{errors.countries}</span>}

        </div>

        <button type="submit">Crear Actividad</button>
    </form>
    )
}

export default Form;