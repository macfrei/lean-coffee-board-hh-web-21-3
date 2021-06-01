import styled from 'styled-components/macro'

export default function Card({ text, author, votes }) {
  return (
    <Layout>
      <p>{text}</p>
      <Wrapper>
        <h2>{author}</h2>
        <span>{votes}</span>
      </Wrapper>
    </Layout>
  )
}

const Layout = styled.section`
  display: grid;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: rgb(25 50 81 / 20%) 0 2px 11px 0;
  max-width: max-content;
  font-weight: 300;

  p {
    margin: 0;
    font-size: 1.5em;
  }

  h2 {
    margin: 0;
    font-size: 1em;
    font-weight: inherit;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`
