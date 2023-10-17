import { About } from './components/About'
import { Nav } from './components/Nav'
import './index.css'

function App() {

  return (
    <main className=' bg-main-bg dark:bg-main-bg-dark text-main-text dark:text-main-text-dark p-7 min-h-screen '>
      <Nav/>
      <About/>
    </main>
  )
}

export default App
