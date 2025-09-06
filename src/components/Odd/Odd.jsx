import { useMemo } from 'react'
import { useBet } from '../../hooks/useBet'
import { useOddData } from '../../hooks/useOddData'
import { formatDate } from '../../utils/dateUtils'
import './Odd.css'
import OddsButton from './OddsButton'
import SportIcon from '../Icon/SportIcon'
import OddTeams from './OddTeams'

export default function Odd({ event }) {
  const { handleToggle, selections } = useBet();
  const { odds, eventId } = useOddData(event);
  
  const selectedKeys = useMemo(() => 
    selections.map((s) => s.id), [selections]
  );

  return (
    <div className="match-card" data-testid={`match-card-${eventId}`}>
      <div className="match-header">
        <SportIcon name={event.sport?.icon} label={event.sport?.label} /> 
        <OddTeams event={event} />
        </div>
      <div className="odds-grid" data-testid={`odds-grid-${eventId}`}>
        {odds.map((o) => {
          const key = `${eventId}:${o.key}`;
          const selected = selectedKeys.includes(key);
          return (
            <OddsButton
              key={o.key}
              label={o.label}
              price={o.price}
              selected={selected}
              onClick={() => handleToggle(key)}
              data-testid={`odds-button-${key}`}
            />
          );
        })}
      </div>
      <div className="match-date" data-testid={`match-date-${eventId}`}>{formatDate(event.start)}</div>
    </div>
  );
}


