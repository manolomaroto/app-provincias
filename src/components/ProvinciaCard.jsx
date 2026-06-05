import { Link } from 'react-router-dom';

function ProvinciaCard({ provincia }) {
  return (
    <Link to={`/detalleProvincia/${provincia.id}`} className="provincia-card">
      <h2>{provincia.nombre}</h2>
      <p>Capital: {provincia.capital}</p>
    </Link>
  )
}

export default ProvinciaCard