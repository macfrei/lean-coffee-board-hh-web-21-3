import Card from './components/Card'
import styled from 'styled-components/macro'

const cards = [
  {
    text: 'What is react?',
    author: 'John',
    votes: 3,
    id: 1,
  },
  {
    text: 'What is html?',
    author: 'Jane',
    votes: 1,
    id: 2,
  },
  {
    text: 'What is css?',
    author: 'Tom',
    votes: 2,
    id: 3,
  },
  {
    text: 'What is node?',
    author: 'Jup',
    votes: 4,
    id: 4,
  },
]

export default function App() {
  return (
    <Grid>
      {cards.map(({ author, text, id, votes }) => (
        <Card author={author} text={text} key={id} votes={votes} />
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  padding: 16px;
`
