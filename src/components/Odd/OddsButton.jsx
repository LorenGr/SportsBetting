export default function OddsButton({ label, price, onClick, selected, ...props }) {
  return (
    <button className={`odds${selected ? ' selected' : ''}`} onClick={onClick} {...props}>
      <div className="odds-label">{label}</div>
      <div className="odds-price">{price.toFixed(2)}</div>
    </button>
  )
}


