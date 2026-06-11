import { RoutesDetalle} from '../routes/AppRoutes';
import { useEffect, useState } from 'react'
import ProvinciaCard from '../components/ProvinciaCard';
import { useProvincias } from '../context/ProvinciasContext';

function Home() {
    const { provincias, cargando, error } = useProvincias();

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
        <RoutesDetalle />
      </div>
    </div>
  )
}

export default Home;