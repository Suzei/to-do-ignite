import { Header } from './components/Header'
import { Item } from './components/Item'
import { ItemList } from './components/ItemList'
import './styles/global.module.css'

function App() {

  return (
    <div>
      <header>
        <Header/>
      </header>
          
      <main>
        <ItemList/>
      </main>
    </div>
  )
}

export default App
