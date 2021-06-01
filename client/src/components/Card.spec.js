import { render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('should render a card with a text, an author and votes', () => {
    render(<Card author="John Doe" text="What is Mongo?" votes={17} />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('What is Mongo?')).toBeInTheDocument()
    expect(screen.getByText(17)).toBeInTheDocument()
  })
})
