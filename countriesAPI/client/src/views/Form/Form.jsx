import { useState } from "react";
import axios from "axios";

const Form = () => {

    const [form, setForm ] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:""
    })

    const [errors, setErrors] = useState({
        name:"",
        difficulty:"",
        duration:"",
        season:""
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
        // if (form.nombre.length > 20) {
        //     setErrors({...errors,nombre:'Menos de 35 caracteres'})
        // }
        if (form.duration > 12) {
            setErrors({...errors,duration:'La actividad debe durar menos de 12 horas'})
        }
        

    } 

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/activities/create", form)
        .then(res=>alert(res))
        .catch(err=>alert(err))
    }

    return (
    <form onSubmit={submitHandler}>
        <div>
            <label>Nombre: </label>
            <input type="text" value={form.name} onChange={changeHandler} name="name" />
            {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
            <label>Dificultad: </label>
            <input type="text" value={form.difficulty} onChange={changeHandler} name="difficulty" />
        </div>

        <div>
            <label>Duración: </label>
            <input type="text" value={form.duration} onChange={changeHandler} name="duration" />
            <span>{errors.duration}</span>
        </div>

        <div>
            <label>Temporada: </label>
            <input type="text" value={form.season} onChange={changeHandler} name="season" />
        </div>

        {/* <div>
            <label>Email: </label>
            <input type="text" value={form.email} onChange={changeHandler} name="email" />
            {errors.email && <span>{errors.email}</span>}
        </div> */}

        <button type="submit">Crear Actividad</button>
    </form>
    )
}

export default Form;