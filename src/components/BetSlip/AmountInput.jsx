import Input from '../Input/Input'
import Button from '../Button/Button'
import { useAmountInput } from '../../hooks/useAmountInput'

export default function AmountInput({ value, onChange }) {
  const { add, handleInputChange } = useAmountInput(value, onChange)
  
  return (
    <div className="amount" data-testid="amount-input">
      <Button variant="outlined" onClick={() => add(-1)} data-testid="amount-decrease">-</Button>
      <Input
        className="amount-input"
        type="number"
        min={0}
        step={0.01}
        value={Number.isFinite(value) ? value : 0}
        onChange={handleInputChange}
        data-testid="amount-input-field"
      />
      <Button variant="outlined" onClick={() => add(1)} data-testid="amount-increase">+</Button>
    </div>
  )
}


