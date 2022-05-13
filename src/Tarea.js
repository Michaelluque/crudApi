import React, { useState } from 'react'

const Tarea = ({ tarea, deleteData,putData }) => {

    const [editarTarea, setEditarTarea] = useState(false)
    const [tareaEditada, setTareaEditada] = useState(tarea.attributes.nombre)

    const enviar = (e) => {
        e.preventDefault();
        putData (tarea.id, tareaEditada)
        setEditarTarea (false)
    }

        
    return (

        <div className="h-14 min-h-10" >
            {
                editarTarea ? (
                    <form  className="flex justify-between space-x-4 max-w[580px] " action='' onSubmit={enviar} >
                        <input  className=" focus:outline-none border-b-2 w-full px-1 text-xl font-bold  " type="text" value={tareaEditada} onChange={(e) => setTareaEditada(e.target.value)} />
                        <button className="bg-green-600 rounded-md flex items-center  text-white text-sm font-bold h-6 p-1 px-3 " type="submit">Actualizar</button>
                    </form>
                ) :

                    <div className="flex justify-between" >
                        
                        <p className="px-2 border-b-2 w-[580px] max-w-[580px]">{tarea.attributes.nombre}</p> 
                        <div className="flex space-x-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => setEditarTarea(!editarTarea)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} onClick={() => deleteData(tarea.id)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        </div>
                    </div>

            }
        </div>
    )
}

export default Tarea