import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BetProvider } from '../../../contexts/BetContextProvider'
import OddsList from '../OddsList'

function TestWrapper({ children }) {
  return <BetProvider>{children}</BetProvider>
}

describe('OddsList Component', () => {
  it('should render', () => {
    render(
      <TestWrapper>
        <OddsList />
      </TestWrapper>
    )

    expect(screen.getByTestId('odds-list-loading')).toBeInTheDocument()
  })
})