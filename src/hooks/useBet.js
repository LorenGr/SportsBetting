import { useContext } from 'react';
import { BetContext } from '../contexts/BetContext';

export function useBet() {
  const context = useContext(BetContext);
  if (context === undefined) {
    throw new Error('useBet must be used within a BetProvider');
  }
  return context;
}
