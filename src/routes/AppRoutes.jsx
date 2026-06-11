import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import DetalleProvincia from '../components/DetalleProvincia'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/provincias" replace />} />
            <Route path="/provincias/*" element={<Home />} />
            <Route path="*" element={<p>Ruta no encontrada</p>} />
        </Routes>
    ); 
}

export function RoutesDetalle() {
    return (
        <Routes>
            <Route path=":id" element={<DetalleProvincia />} />
        </Routes>
    ); 
}