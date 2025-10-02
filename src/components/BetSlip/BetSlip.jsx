import { useBet } from '../../hooks/useBet'
import { AnimatePresence, motion } from 'framer-motion'
import './BetSlip.css'
import AmountInput from './AmountInput'
import BetSlipSelection from './BetSlipSelection'
import BetSlipFooter from './BetSlipFooter'

export default function BetSlip() {
  const { selections, amount, setAmount, handleRemove } = useBet()

  return (
    <div className="bet-slip" data-testid="bet-slip">
      <h3 data-testid="bet-slip-title">Betslip</h3>
      <div className="divider" />
      <div className="selections" data-testid="bet-slip-selections">
        {selections.length === 0 ? (
          <div className="muted small" data-testid="bet-slip-empty">
            No bets chosen.
          </div>
        ) : (
          <AnimatePresence>
            {selections.map((s) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.3, ease: [0, 0.047, 0, 1.066] }}
                style={{ flex: 'none', overflow: 'hidden' }}
              >
                <BetSlipSelection selection={s} onRemove={handleRemove} />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
      <div className="divider" />
      <div className="slip-row">
        <div>Amount</div>
        <AmountInput value={amount} onChange={setAmount} />
      </div>
      <BetSlipFooter />
    </div>
  )
}
