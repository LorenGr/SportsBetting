import './Layout.css'
import Header from '../Header/Header'

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <div className="layout">
        {children}
      </div>
    </div>
  )
}


