import { useMemo } from 'react'

export const useOddData = (event) => {
  return useMemo(() => {
    const market = Object.values(event.bet)[0];
    return {
      odds: market.choices.map((c) => ({
        key: String(c.id),
        label: c.actor.label,
        price: c.odd,
      })),
      eventId: String(event.id)
    };
  }, [event]);
};
