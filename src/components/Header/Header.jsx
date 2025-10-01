import './Header.css'
import ThemeSwitcher from './ThemeSwitcher'
import Github from '../Icon/Github'

export default function Header() {
  return (
    <header className="header">
      <strong className="logo">Sports Live Betting</strong>
      <div className="header-right">
     
        <ThemeSwitcher />
        <a href="https://github.com/LorenGr/SportsBetting" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
      </div>
    </header>
  )
}


