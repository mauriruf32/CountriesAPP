import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity, getCountryById, getActivities } from "../../redux/actions";
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
        countries: []
    })

    const [errors, setErrors] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:"",
        countries:[]
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate({...form,[property]:value})

        setForm({...form,[property]:value})  
    }

    const validate = (form) => {
        if (form.name.length > 20) {
            setErrors({...errors,name:'Menos de 35 caracteres'})
        }
        if (/.*\d+.*/.test(form.name)) {
            setErrors({...errors,name:'El nombre no puede tener numeros'})
        }
        if (form.difficulty > 5 || form.difficulty < 1) {
            setErrors({...errors,difficulty:'La dificultad tiene que ser entre 1 y 5'})
        }
        if (form.duration > 12) {
            setErrors({...errors,duration:'La actividad debe durar menos de 12 horas'})
        }
        if (form.season !== "Verano" || form.season !== "Invierno" || form.season !=="Primavera" || form.season !== "Otoño" ){
            setErrors({...errors,season: 'Debes seleccionar una temporada'})
        }
        if (form.countries === ""){
            setErrors({...errors,countries: 'Debes elegir al menos 1 pais'})
        }
    } 

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/create", form)
        .then(res=>alert(res))
        .catch(err=>alert(err))
    }

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


    return (
    <form className={style.form} onSubmit={submitHandler}>
        <h1>Crea tu propia actividad:</h1>
        <div className={style.inputbox}>
            <label>Nombre de la actividad: </label>
            <input type="text" value={form.name} onChange={changeHandler} name="name" />
            {errors.name && <span>{errors.name}</span>}
        </div>

        <div className={style.inputbox}>
            <label>Dificultad (1 - 5): </label>
            <input type="text" value={form.difficulty} onChange={changeHandler} name="difficulty" />
            {errors.difficulty && <span>{errors.difficulty}</span>}
        </div>

        <div className={style.inputbox}>
            <label>Duración en horas: </label>
            <input type="text" value={form.duration} onChange={changeHandler} name="duration" />
            {errors.duration && <span>{errors.duration}</span>}
        </div>

        <div className={style.inputbox}>
            <label>Temporada: </label>
            <input type="text" value={form.season} onChange={changeHandler} name="season" />
            {errors.season && <span>{errors.season}</span>}
        </div>

        <div className={style.inputbox}>
            <label>Paises donde se realiza la actividad: </label>
            <select type="text" value={form.countries} name="countries" onChange={changeHandler2}  multiple required>
                  {/* <option value="">--Please choose an option--</option> */}
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