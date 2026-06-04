import { useEffect, useState } from 'react'
import ProvinciaCard from './components/ProvinciaCard';
import {getProvincias} from './services/provinciasApi';
import './css/App.css'

function App() {
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    getProvincias().then(data => setProvincias(data));
  }, []);

  return (
    <>
      <div className="sidenav">
        {provincias.map((provincia) => (
          <>
          <ProvinciaCard key={provincia.id} provincia={provincia} />
          </>
        ))}
      </div>
      <div className="content">
        <h1>Bienvenido a la aplicación de provincias</h1>
        <p>Selecciona una provincia para ver más detalles.</p>
      </div>
    </>
  )
}

export default App
