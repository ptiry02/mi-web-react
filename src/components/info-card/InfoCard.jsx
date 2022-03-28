import styled from '@emotion/styled'
import Slide from '@mui/material/Slide'
import Exp from './Exp'

const InfoCard = ({ id, show, timeout }) => {
  return (
    <Slide direction="left" in={show} timeout={timeout} unmountOnExit={true}>
      <Card>
        {id === 'exp' && <Exp />}
        {id === 'form' && <h1>PRÓXIMAMENTE</h1>}
        {id === 'skills' && <h1>PRÓXIMAMENTE</h1>}
        {id === 'contact' && <h1>PRÓXIMAMENTE</h1>}
      </Card>
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
  border-radius: 1rem;
`
