import './Header.css'
import ThemeSwitcher from './ThemeSwitcher'
import Github from '../Icon/Github'

export default function Header() {
  return (
    <header className="header">
      <strong className="logo">SportX Senior Lead Frontend tech test</strong>
      <div className="header-right">
        <span className="badge">Test Results : Loren Grixti</span>
        <ThemeSwitcher />
        <a href="https://github.com/LorenGr/SportsBetting" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
      </div>
    </header>
  )
}


