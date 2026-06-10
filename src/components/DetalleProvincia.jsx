import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProvincias } from '../context/ProvinciasContext'

function DetalleProvincia() {
  const { id } = useParams()
  const { provincias } = useProvincias()
  const [provincia, setProvincia] = useState(null)

  useEffect(() => {
    const provinciaEncontrada = provincias.find(p => p.id === parseInt(id))
    setProvincia(provinciaEncontrada)
  }, [id, provincias])

  if (!provincia) {
    return <div>Provincia no encontrada</div>;
  }


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