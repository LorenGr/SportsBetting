import { useState, useEffect } from 'react'
import { useBet } from '../../hooks/useBet'
import Odd from '../Odd/Odd'
import './OddsList.css'

export default function OddsList() {
  const { events, loading } = useBet()
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    if (!loading && events.length > 0) {
        setIsVisible(true);
    } else {
      setIsVisible(false)
    }
  }, [loading, events])
  
  if (loading) {
    return (
      <div className="odds-list-loading" data-testid="odds-list-loading">
        Loading events...
      </div>
    )
  }

  return (
    <div className={`odds-list ${isVisible ? 'fade-in' : 'fade-out'}`} data-testid="odds-list">
      {events.map((ev, index) => (
        <div 
          key={ev.id} 
          className="odds-item"
          data-testid={`odds-item-${ev.id}`}
          style={{ 
            animationDelay: isVisible ? `${index * 0.1}s` : '0s' 
          }}
        >
          <Odd event={ev} />
        </div>
      ))}
    </div>
  )
}
