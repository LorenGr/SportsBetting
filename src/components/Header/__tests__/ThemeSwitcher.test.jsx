import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ThemeSwitcher from '../ThemeSwitcher'

describe('ThemeSwitcher Component', () => {
  it('should render theme toggle button', () => {
    render(<ThemeSwitcher />)
    
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toBeInTheDocument()
  })

  it('should have correct aria-label', () => {
    render(<ThemeSwitcher />)
    
    const button = screen.getByRole('button', { name: /toggle theme/i })
    expect(button).toHaveAttribute('aria-label', 'Toggle theme')
  })
})