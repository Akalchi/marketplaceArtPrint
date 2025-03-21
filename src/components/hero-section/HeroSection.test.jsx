import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, useLocation } from 'react-router-dom'
import HeroSection from './HeroSection'

describe('HeroSection', () => {
  it('debería navegar al catálogo cuando se hace clic en el botón', () => {
    const TestComponent = () => {
      const location = useLocation()
      return (
        <>
          <div data-testid="location-display">{location.pathname}</div>
          <HeroSection />
        </>
      )
    }

    render(
      <MemoryRouter initialEntries={['/']}>
        <TestComponent />
      </MemoryRouter>
    )

    fireEvent.click(screen.getByText('Explorar experiencias'))
    expect(screen.getByTestId('location-display')).toHaveTextContent('/catalog')
  })
})