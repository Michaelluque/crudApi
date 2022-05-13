import React, { useState } from 'react'
import axios from "axios";

const Formulario = ({tareas, settarea,getData }) => {

    const [nuevaTarea, setNuevaTarea] = useState('');

    const postData = async () => {
        await axios.post("http://localhost:1337/api/tareas",{data:{nombre:nuevaTarea,completada:true}})
        getData ()
              }
    

    const enviarTarea = (e) => {
        e.preventDefault();
       postData();
       setNuevaTarea("");
    }


    return (
        
            <form className=" bg-white w-[750px] h-36 p-4 rounded-md mt-5 space-x-3 flex justify-center items-center" onSubmit={enviarTarea}>
                <input  className=" focus:outline-none border border-blue-100 rounded-md w-[450px] h-12  px-2 items-center" placeholder="Escribir Tarea" type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} />
                <button  className="bg-green-600 rounded-md  text-white text-md font-bold h-12 p-2 px-3" type="submit">Enviar</button>
            </form>
        
    )
}

export default Formulario