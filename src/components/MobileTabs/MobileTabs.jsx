import { useEffect, useRef, useState } from 'react'
import { useBet } from '../../hooks/useBet'
import './MobileTabs.css'

export default function MobileTabs({ odds, slip }) {
  const { selections } = useBet()
  const [active, setActive] = useState('odds')
  const [attention, setAttention] = useState(false)
  const prevCount = useRef(selections.length)

  useEffect(() => {
    if (selections.length > prevCount.current) {
      prevCount.current = selections.length
      setAttention(true)
      const t = setTimeout(() => setAttention(false), 1400)
      return () => clearTimeout(t)
    }
    prevCount.current = selections.length
  }, [selections.length])

  return (
    <div className="mobile-tabs">
      <div className="mobile-tabs-bar" role="tablist" aria-label="Views">
        <button
          role="tab"
          aria-selected={active === 'odds'}
          className={`mobile-tab ${active === 'odds' ? 'active' : ''}`}
          onClick={() => setActive('odds')}
        >
          Odds
        </button>
        <button
          role="tab"
          aria-selected={active === 'slip'}
          className={`mobile-tab ${active === 'slip' ? 'active' : ''} ${attention ? 'attention' : ''}`}
          onClick={() => setActive('slip')}
        >
          Bet Slip
          <span className="badge" aria-label={`${selections.length} selections`}>{selections.length}</span>
        </button>
      </div>
      <div className="mobile-tabs-panel">
        {active === 'odds' ? odds : slip}
      </div>
    </div>
  )
}
