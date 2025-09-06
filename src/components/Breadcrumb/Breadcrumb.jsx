import { useBet } from '../../hooks/useBet';
import './Breadcrumb.css';

export default function Breadcrumb() {
  const { events, loading } = useBet();
  
  const items = !loading && events.length ? [
    events[0].sport.label, 
    events[0].category.label, 
    events[0].competition.label
  ] : [];

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={idx} className={`crumb${isLast ? ' active' : ''}`}>
            {item}
            {!isLast && <span className="sep">/</span>}
          </span>
        );
      })}
    </nav>
  );
}


