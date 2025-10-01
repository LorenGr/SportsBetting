import { useMemo } from 'react'
import { useBet } from '../../hooks/useBet'
import './BetSlipFooter.css'
import Button from '../Button/Button'

export default function BetSlipFooter() {
  const { selections, amount, handleSubmit } = useBet()
  
  const potential = useMemo(() => {
    return selections.reduce((sum, s) => sum + (amount * s.price), 0)
  }, [selections, amount])

  return (
    <>
      <div className="divider" />
      <div className="slip-row">
        <div>Total</div>
        <div data-testid="bet-slip-total">{amount.toFixed(2)}€</div>
      </div>
      <div className="slip-row">
        <div>Potential Gain</div>
        <div data-testid="bet-slip-potential">{potential.toFixed(2)}€</div>
      </div>
      <div className="divider" />
      <Button fullWidth variant="filled" disabled={selections.length === 0 || amount <= 0} onClick={handleSubmit} data-testid="bet-slip-submit">
        Submit bets
      </Button>
     
    </>
  )
}
