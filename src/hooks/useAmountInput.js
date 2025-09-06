import { useCallback } from 'react'

export const useAmountInput = (value, onChange) => {
  const add = useCallback((delta) => {
    const next = Math.max(0, parseFloat((value + delta).toFixed(2)));
    onChange(next);
  }, [value, onChange]);

  const handleInputChange = useCallback((e) => {
    const parsed = parseFloat(e.target.value);
    onChange(Number.isFinite(parsed) && parsed >= 0 ? parsed : 0);
  }, [onChange]);

  return { add, handleInputChange };
};
