import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, orderCountriesByName, getActivities } from "../../redux/actions";
import style from "./Form.module.css";

const Form = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    

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
            setErrors({...errors, name: "Less than 20 characters."})
        }
        else if (/.*\d+.*/.test(form.name)) {
            setErrors({...errors, name: 'The name cannot have numbers.'})
        }
        else if (form.difficulty > 5 || form.difficulty < 1) {
            setErrors({...errors, difficulty: 'The difficulty must be between 1 and 5.'})
        }
        else if (form.duration > 12) {
            setErrors({...errors, duration: 'The activity must last 12 hours or less.'})
        }
        else if (form.season !== "Summer" || form.season !== "Winter" || form.season !=="Spring" || form.season !== "Autum" ){
            setErrors({...errors,season: 'You must select a season.'})
        }
        else if (form.countries === ""){
            setErrors({...errors,countries: 'You must choose at least 1 country.'})
        }
        else {
            setErrors({...errors, name:"", difficulty:"", duration:"", season:"", countries:[]})
        }
    } 

    const submitHandler = (event) => {
        if (form.countries==="" || form.name==="" || form.duration==="" || form.difficulty ==="" || form.season==="" || form.countries===[] ){
        event.preventDefault();
        alert("All fields must be filled out.")}
        else{
        axios.post("http://localhost:3001/create", form)
        alert("Activity created successfully!!")
    }
    };

    useEffect(()=>{
        dispatch(getCountries());
        dispatch(getActivities());
    },[dispatch]);

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
        <h1>Create your own activity:</h1>
        <h3>Here you can create any activity you want and assign the countries you like the most...</h3>
        <div className={style.inputbox}>
            <label>Activity Name: </label>
            <input type="text" value={form.name} onChange={changeHandler} name="name" />
            {errors.name && <span>{errors.name}</span>}
        </div>

        <div className={style.inputbox}>
            <label>Difficulty: </label>
            <input type="number" min="1" max="5" value={form.difficulty} onChange={changeHandler} name="difficulty" />
            {errors.difficulty && <span>{errors.difficulty}</span>}
        </div>

        <div className={style.inputbox}>
            <label>Duration in hours: </label>
            <input type="number" min="1" max="12" value={form.duration} onChange={changeHandler} name="duration" />
            {errors.duration && <span>{errors.duration}</span>}
        </div>
        <div className={style.inputbox}>
            <label>Season: </label>
                <select type="text" value={form.season} onChange={changeHandler} name="season" >
                    <option value="Winter">Winter</option>
                    <option value="Autum">Autum</option>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                </select>
            {errors.season && <span>{errors.season}</span>}
        </div>
        <div className={style.inputbox}>
            <label>Countries where the activity takes place: </label>
            <select name="order" onChange={handleOrder} className={style.select} >
             <option value="alphabetA">Names (A-Z)</option>
             <option value="alphabetZ">Names (Z-A)</option>
            </select>
            <select type="text" value={form.countries} name="countries" onChange={changeHandler2}  multiple required>
                  {countries.map((country) => {
                    return (<option key={country.id} value={country.id}>{" "} {country.name} </option> );
                  })}
            </select>
            {errors.countries && <span>{errors.countries}</span>}

        </div>

        <button type="submit">Create Activity</button>
    </form>
    )
}

export default Form;