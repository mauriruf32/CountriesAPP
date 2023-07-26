import { useState } from "react";
import axios from "axios";

const Form = () => {

    const [form,setForm ] = useState({
        name:"",
        difficulty:"",
        duration:"",
        phone:"",
        duración:"",
        temporada:""
    })

    const [errors, setErrors] = useState({
        email:"",
        name:"",
        phone:"",
        duración:"",
        temporada:""
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validate({...form,[property]:value})

        setForm({...form,[property]:value})  
    }

    const validate = (form) => {
        if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
            setErrors({...errors,email:""})
        } else {
            setErrors({...errors,email:"Email incorrecto Bitch"})
        }
        if (form.email==="") setErrors({...errors,email:"Email vacio"}) 
    } 

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/countries/create", form)
        .then(res=>alert(res))
        .catch(err=>alert(err))
    }

    return (
    <form onSubmit={submitHandler}>
        <div>
            <label>Nombre: </label>
            <input type="text" value={form.name} onChange={changeHandler} name="name" />
        </div>

        <div>
            <label>Dificultad: </label>
            <input type="text" value={form.phone} onChange={changeHandler} name="phone" />
        </div>

        <div>
            <label>Duración: </label>
            <input type="text" value={form.duración} onChange={changeHandler} name="duración" />
        </div>

        <div>
            <label>Temporada: </label>
            <input type="text" value={form.temporada} onChange={changeHandler} name="temporada" />
        </div>

        {/* <div>
            <label>Email: </label>
            <input type="text" value={form.email} onChange={changeHandler} name="email" />
            {errors.email && <span>{errors.email}</span>}
        </div> */}

        <button type="submit">SUBMIT</button>
    </form>
    )
}

export default Form;