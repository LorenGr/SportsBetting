import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BetProvider } from '../BetContextProvider'
import { useBet } from '../../hooks/useBet'

function TestComponent() {
  const { selections, amount } = useBet()
  
  return (
    <div>
      <div data-testid="selections-count">{selections.length}</div>
      <div data-testid="amount">{amount}</div>
    </div>
  )
}

describe('BetContext', () => {
  it('should provide initial state', () => {
    render(
      <BetProvider>
        <TestComponent />
      </BetProvider>
    )

    expect(screen.getByTestId('selections-count')).toHaveTextContent('0')
    expect(screen.getByTestId('amount')).toHaveTextContent('1')
  })

  it('should throw error when used outside provider', () => {
    expect(() => {
      render(<TestComponent />)
    }).toThrow('useBet must be used within a BetProvider')
  })
})