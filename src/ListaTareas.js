import React from 'react'
import Tarea from './Tarea'
import axios from "axios";


const ListaTareas = ({ tareas, getData }) => {

    const putData = async (id, nuevaTarea) => {
        await axios.put(`http://localhost:1337/api/tareas/${id}`, { data: { nombre: nuevaTarea } })
        getData();
    }

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:1337/api/tareas/${id}`, {})
        getData();
        alert ("Desea elimiar la Tarea?")
    }


    return (
        <div className=" bg-white w-[750px] h-auto p-4 rounded-md">

            {tareas.length > 0 ? (

                tareas.map((tarea) =>
                    <Tarea key={tarea.id} tarea={tarea} deleteData={deleteData} putData={putData} />
                )
            ) :
                (<p className="text-center text-xl">No Hay Tareas agregadas, agrege una tarea.</p>)
            }


        </div>
    )
}

export default ListaTareas