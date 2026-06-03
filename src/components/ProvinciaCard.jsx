function ProvinciaCard({ provincia }) {
  return (
    <div className="provincia-card">
      <h2>{provincia.nombre}</h2>
      <p>Capital: {provincia.capital}</p>
      <p>Población: {provincia.poblacion}</p>
    </div>
  )
}

export default ProvinciaCard