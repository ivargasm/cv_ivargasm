import { About } from './components/About'
import { Jobs } from './components/Jobs'
import { Nav } from './components/Nav'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import './index.css'

function App() {

  return (
    <main className=' bg-main-bg dark:bg-main-bg-dark text-main-text dark:text-main-text-dark min-h-screen '>
      <Nav/>
      <About/>
      <Services/>
      <Jobs/>
      <Skills/>
    </main>
  )
}

export default App
