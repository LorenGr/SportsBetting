import { useBet } from '../../hooks/useBet'
import './BetSlip.css'
import AmountInput from './AmountInput'
import BetSlipSelection from './BetSlipSelection'
import BetSlipFooter from './BetSlipFooter'

export default function BetSlip() {
  const { selections, amount, setAmount, handleRemove } = useBet();

  return (
    <div className="bet-slip" data-testid="bet-slip">
      <h3 data-testid="bet-slip-title">My Choices</h3>
      <div className="divider" />
      <div className="selections" data-testid="bet-slip-selections">
        {selections.length === 0 ? (
          <div className="muted small" data-testid="bet-slip-empty">No bets chosen.</div>
        ) : (
          selections.map((s) => (
            <BetSlipSelection key={s.id} selection={s} onRemove={handleRemove} />
          ))
        )}
      </div>
      <div className="divider" />
      <div className="slip-row">
        <div>Amount</div>
        <AmountInput value={amount} onChange={setAmount} />
      </div>
      <BetSlipFooter />
    </div>
  );
}


