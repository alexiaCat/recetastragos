import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import Listadobebidas from './components/ListadoBebidas'
import ModalBebidas from './components/ModalBebidas'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'


function App() {

  return (
    <CategoriasProvider>
        <BebidasProvider>
    <header className= "py-5">
        <h1>Buscador de recetas para tragos</h1>
    </header>

    <Container className= "mt-5">
     <Formulario/>
     <Listadobebidas/>
     <ModalBebidas/>
    </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
