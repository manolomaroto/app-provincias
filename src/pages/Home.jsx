import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import ProvinciaCard from '../components/ProvinciaCard';
import { getProvincias } from '../services/provinciasApi';
import DetalleProvincia from '../components/DetalleProvincia';

function Home() {
  const [provincias, setProvincias] = useState([])
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProvincias()
      .then((data) => setProvincias(data))
      .catch((error) => setError(error))
      .finally(() => setCargando(false));
  }, [])

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="home-container">
      <div className="sidenav">
        {provincias.map((provincia) => (
          <ProvinciaCard key={provincia.id} provincia={provincia} />
        ))}
      </div>
      <div className="content">
        <h1>Bienvenido a la aplicación de provincias</h1>
        <p>Selecciona una provincia para ver más detalles.</p>
        <Routes>
          <Route path="/provincias/:id" element={<DetalleProvincia />} />
        </Routes>
      </div>
    </div>
  )
}

export default Home;