import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from '../Button'

describe('Button Component', () => {
  it('should render with children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('should apply default filled variant', () => {
    render(<Button>Test</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('btn', 'filled')
  })

  it('should apply outlined variant', () => {
    render(<Button variant="outlined">Test</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('btn', 'outlined')
  })
})