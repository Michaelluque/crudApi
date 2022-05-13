import React, { useState, useEffect } from 'react'
import ListaTareas from './ListaTareas'
import Formulario from './Formulario'
import axios from "axios";


const App = () => {

  const [tareas, settarea] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:1337/api/tareas")
    settarea(res.data.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    
      <div className="flex flex-col items-center space-y-5" >
        <h1 className="mt-10">Lista de Tareas</h1>
        <Formulario tareas={tareas} settarea={settarea} getData={getData} />
        <ListaTareas tareas={tareas} settarea={settarea} getData={getData} />
      </div>
    
  )
}

export default App