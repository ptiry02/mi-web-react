import styled from 'styled-components'
import { ProfilePic } from './ProfilePic'
import { Descr } from './Descr'
import { InfoBox } from './InfoBox'

const MainCard = () => {
  return (
    <Card>
      <ProfilePic />
      <Descr />
      <InfoBox />
    </Card>
  )
}
export default MainCard

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  padding: 1.5rem 1.6rem;
  font-size: 1rem;
  background-color: #a6a59c;
  width: 20vw;
  box-shadow: 0px 0px 6px black, 2px 2px 12px darkgray;
  overflow-y: scroll;
`
