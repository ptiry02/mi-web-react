import styled from '@emotion/styled'
import jobs from '../../assets/helpers/experience.json'

const Exp = () => {
  return (
    <>
      <h1>{jobs.title.toUpperCase()}</h1>
      {jobs.list.map((job) => (
        <Wrapper key={job.key}>
          <Job>{job.company}</Job>
          <p>{job.date}</p>
          <article>{job.functions}</article>
        </Wrapper>
      ))}
    </>
  )
}
export default Exp

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
