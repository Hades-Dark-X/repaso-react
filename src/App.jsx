import './App.css'
import { Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import ListaCasas from './components/casas/ListaCasas'
import { FormularioPociones } from './components/pociones/FormularioPociones'
import Section from './components/section/Section'
import Footer from './components/footer/Footer'



function App() {
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <main>
        <Routes>
          <Route path='/' element={<Section/>}></Route>
          <Route path='/casas' element={<ListaCasas/>}></Route>
          <Route path='/pociones' element={<FormularioPociones/>}></Route>
        </Routes>
      </main>
      
      <Footer/>
    </div>
  )
}

export default App
