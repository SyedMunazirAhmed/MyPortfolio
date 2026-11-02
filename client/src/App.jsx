import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import useLocalStorage from './hooks/useLocalStorage'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Projects from './pages/Projects'

const currentYear = new Date().getFullYear()

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  // Sync the theme to the <html> element so CSS variables can switch
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="container">© {currentYear} Syed Munazir Ahmed</div>
      </footer>
    </>
  )
}
