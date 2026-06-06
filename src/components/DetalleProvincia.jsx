import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProvinciaById } from '../services/provinciasApi'

function DetalleProvincia() {
  const { id } = useParams()
  const [provincia, setProvincia] = useState(null)

  useEffect(() => {
    getProvinciaById(id).then(data => setProvincia(data))
  }, [id])

  return (
    <div>
      <h2>Detalle de la provincia</h2>
        <p>Nombre: {provincia?.nombre}</p>
        <p>Capital: {provincia?.capital}</p>
        <p>Comunidad Autónoma: {provincia?.comunidad_autonoma}</p>
        <p>Superficie: {provincia?.superficie} km²</p>
        <p>Población: {provincia?.poblacion}</p>
    </div>
  )
}

export default DetalleProvincia;