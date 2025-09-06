import './Input.css'

export default function Input({ className, ...rest }) {
  const classes = ['input', className].filter(Boolean).join(' ')
  return <input className={classes} {...rest} />
}


