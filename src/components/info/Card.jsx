import styled from '@emotion/styled'
import Slide from '@mui/material/Slide'
import items from './infoCardItems.json'

const InfoCard = ({ id, show, timeout }) => {
  return (
    <Slide direction="left" in={show} timeout={timeout} unmountOnExit={true}>
      {id === 'exp' ? (
        <Card id={id}>
          <h1>{items.exp.toUpperCase()}</h1>
          {items.expInfoItems.map((job) => (
            <Wrapper key={job.key}>
              <Job>{job.job}</Job>
              <p>{job.date}</p>
              <article>{job.functions}</article>
            </Wrapper>
          ))}
        </Card>
      ) : (
        <Card id={id}>
          <h1>PRÓXIMAMENTE</h1>
        </Card>
      )}
    </Slide>
  )
}
export default InfoCard

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1.6rem;
  background-color: #a6a59c;
  box-shadow: 0px 0px 6px black, 2px 2px 12px darkgray;
  width: 25vw;
  height: 100%;
  overflow: scroll;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid gray;
  margin-bottom: 0.5rem;
  padding: 0.6rem 1.2rem;
`

const Job = styled.h3`
  margin: 0;
`
