import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import './css/App.css'

function App() {
  return (
    <>
        <Routes>
          <Route path="/*" element={<Home />} />
          {/* 
          <Route path="/comunidadesAutonomas" element={<ComunidadesAutonomas />} />
          <Route path="/actualizar" element={<ActualizarProvincia />} /> */}
        </Routes>
    </>
  )
}

export default App
