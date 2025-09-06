import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BetProvider } from '../../../contexts/BetContextProvider'
import Odd from '../Odd'

const mockEvent = {
  id: 1,
  label: 'Team A / Team B',
  start: '2021-03-24T20:45:00.000+01:00',
  sport: { label: 'Football', icon: 'soccer' },
  bet: {
    '123': {
      question: { label: 'Who will win?' },
      choices: [
        { id: 1, odd: 2.0, actor: { label: 'Team A' } },
        { id: 2, odd: 3.0, actor: { label: 'Team B' } }
      ]
    }
  }
}

function TestWrapper({ children }) {
  return <BetProvider>{children}</BetProvider>
}

describe('Odd Component', () => {
  it('should render event', () => {
    render(
      <TestWrapper>
        <Odd event={mockEvent} />
      </TestWrapper>
    )

    expect(screen.getByTestId('match-card-1')).toBeInTheDocument()
  })

  it('should display sport label', () => {
    render(
      <TestWrapper>
        <Odd event={mockEvent} />
      </TestWrapper>
    )

    expect(screen.getByText('Football')).toBeInTheDocument()
  })

  it('should render odds buttons', () => {
    render(
      <TestWrapper>
        <Odd event={mockEvent} />
      </TestWrapper>
    )

    expect(screen.getByTestId('odds-button-1:1')).toBeInTheDocument()
    expect(screen.getByTestId('odds-button-1:2')).toBeInTheDocument()
  })
})