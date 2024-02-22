import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import ItemListContainer from './components/ListGreeting/ListGreeting'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Hola"}/>
    </>
  )
}

export default App
