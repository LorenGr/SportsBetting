import { useState, useEffect, useMemo, useCallback } from 'react';
import { BetContext } from './BetContext';
import { extractTeamNames } from '../utils/teamUtils';

export function BetProvider({ children }) {
  const [selections, setSelections] = useState([]);
  const [amount, setAmount] = useState(1);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await import('../../data/events.json');
        setEvents(response.default.events);
      } catch {
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  const handleToggle = useCallback((id) => {
    setSelections((prev) => {
      const exists = prev.some((p) => p.id === id);
      if (exists) {
        return prev.filter((p) => p.id !== id);
      }
      const [eventIdStr, choiceIdStr] = id.split(':');
      const eventId = parseInt(eventIdStr);
      const choiceId = parseInt(choiceIdStr);

      const event = events.find(e => e.id === eventId);
      if (!event) return prev;
      const market = Object.values(event.bet)[0];
      const choice = market.choices.find(choice => choice.id === choiceId);
      const [home, away] = extractTeamNames(event);
      
      const selection = {
        id,
        label: `${home} / ${away}`,
        market: market.question.label,
        outcome: choice.actor.label,
        price: choice.odd
      };
      
      return [selection, ...prev];
    });
  }, [events]);

  const handleRemove = useCallback((id) => {
    setSelections((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const handleSubmit = useCallback(() => {
    alert('Bets submitted!');
  }, []);

  const value = useMemo(() => ({
    selections,
    amount,
    setAmount,
    events,
    loading,
    handleToggle,
    handleRemove,
    handleSubmit
  }), [selections, amount, events, loading, handleToggle, handleRemove, handleSubmit]);

  return (
    <BetContext.Provider value={value}>
      {children}
    </BetContext.Provider>
  );
}
