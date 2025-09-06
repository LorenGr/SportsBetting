import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BetProvider } from '../contexts/BetContextProvider'
import App from '../App'

function TestWrapper({ children }) {
  return <BetProvider>{children}</BetProvider>
}

describe('Integration Tests', () => {
  it('should display bet slip', () => {
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    )

    expect(screen.getByTestId('bet-slip')).toBeInTheDocument()
  })

  it('should display odds list', () => {
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    )

    expect(screen.getByTestId('odds-list-loading')).toBeInTheDocument()
  })
})