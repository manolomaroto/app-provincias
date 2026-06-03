import { useEffect, useState } from 'react'
import ProvinciaCard from './components/ProvinciaCard';
import {getProvincias} from './services/provinciasApi';

function App() {
  const [provincias, setProvincias] = useState([]);

  useEffect(() => {
    getProvincias().then(data => setProvincias(data));
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <p>{provincias.length} provincias disponibles</p>
      <div>
        {provincias.map((provincia) => (
          <>
          <ProvinciaCard key={provincia.id} provincia={provincia} />
          </>
        ))}
      </div>
    </>
  )
}

export default App
