import { useParams } from 'react-router-dom'

function DetalleProvincia() {
  const { id } = useParams()

  return (
    <div>
      <h2>Detalle de la provincia</h2>
      <p>ID recibido: {id}</p>
    </div>
  )
}

export default DetalleProvincia;