import { useState } from 'react'
import './ThemeSwitcher.css'
import ThemeSun from '../Icon/ThemeSun'
import ThemeMoon from '../Icon/ThemeMoon'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') || 'dark'
  })

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <button aria-label="Toggle theme" className={`theme-toggle ${theme === 'light' ? 'light' : ''}`} onClick={toggleTheme}>
      {theme === 'dark' ? <ThemeSun /> : <ThemeMoon />}
    </button>
  )
}
