import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BetProvider } from '../../../contexts/BetContextProvider'
import BetSlip from '../BetSlip'

function TestWrapper({ children }) {
  return <BetProvider>{children}</BetProvider>
}

describe('BetSlip Component', () => {
  it('should render empty state when no selections', () => {
    render(
      <TestWrapper>
        <BetSlip />
      </TestWrapper>
    )

    expect(screen.getByTestId('bet-slip-empty')).toBeInTheDocument()
  })

  it('should display amount input', () => {
    render(
      <TestWrapper>
        <BetSlip />
      </TestWrapper>
    )

    expect(screen.getByTestId('amount-input-field')).toBeInTheDocument()
  })

  it('should display submit button', () => {
    render(
      <TestWrapper>
        <BetSlip />
      </TestWrapper>
    )

    expect(screen.getByTestId('bet-slip-submit')).toBeInTheDocument()
  })
})