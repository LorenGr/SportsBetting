import './Button.css'

export default function Button({ children, fullWidth, variant = 'filled', className, ...rest }) {
  return (
    <button
      {...rest}
      className={['btn', variant, fullWidth && 'full', className].filter(Boolean).join(' ')}
    >
      {children}
    </button>
  )
}


