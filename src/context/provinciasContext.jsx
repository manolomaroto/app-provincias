import axios from 'axios';
import { createContext, useState, useEffect} from 'react';
import { useContext } from 'react';

export const ProvinciasContext = createContext();

export const ProvinciasProvider = ({ children }) => {
  const [provincias, setProvincias] = useState([]);
  const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('/api/provincias')
            .then(response => setProvincias(response.data))
            .catch(error => setError(error))
            .finally(() => setCargando(false));
    }, []);

    return (
        <ProvinciasContext.Provider value={{ provincias, cargando, error }}>
            {children}
        </ProvinciasContext.Provider>
    );
};      

export function useProvincias() {
    return useContext(ProvinciasContext);
}
