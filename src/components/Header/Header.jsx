import './Header.css'
import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  return (
    <header className="header">
      <strong className="logo">SportX Senior Lead Frontend tech test</strong>
      <div className="header-right">
        <span className="badge">Test Results : Loren Grixti</span>
        <ThemeSwitcher />
      </div>
    </header>
  )
}


