import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Jobs } from './components/Jobs'
import { Nav } from './components/Nav'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import './index.css'

function App() {

  const defaultLanguage = ['en', 'es'].includes(localStorage.getItem('language')) ? localStorage.getItem('language') : 'en'
  const [language, setLanguage] = useState(defaultLanguage)
  const [ismael, setIsmael] = useState('')

  const getLanguage = async() => {
    const url = './language.json'
    const peticion = await fetch(url)
    const lang = await peticion.json()
    setIsmael(language === 'en' ? lang.en : lang.es)
  }

  useEffect(() => {
    getLanguage()
    // eslint-disable-next-line
  },[language])

  return (
    <main className=' bg-main-bg dark:bg-main-bg-dark text-main-text dark:text-main-text-dark min-h-screen '>
      {ismael ? (
        <>
          <Nav language={language} setLanguage={setLanguage} ismael={ismael} />
          <About ismael={ismael} />
          <Services ismael={ismael} />
          <Jobs ismael={ismael} />
          <Skills ismael={ismael} />
          <Contact ismael={ismael} />
        </>
      ) : (
        <div>Cargando...</div>
      )}
    </main>
  )
}

export default App
