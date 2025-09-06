import './BetSlipSelection.css'
import Button from '../Button/Button'
import DeleteIcon from '../Icon/DeleteIcon'

export default function BetSlipSelection({ selection, onRemove }) {
  return (
    <div className="selection-item">
      <div className="selection-title">{selection.label}</div>
      <Button variant="none" onClick={() => onRemove(selection.id)}>
        <DeleteIcon />
      </Button>
      <div className="selection-sub">{selection.market}</div>
      <div className="selection-outcome">- {selection.outcome}</div>
      <div className="selection-price">{selection.price.toFixed(2)}</div>
    </div>
  )
}


