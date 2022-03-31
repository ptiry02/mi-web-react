import { ProfilePic } from './ProfilePic'
import { Descr } from './Descr'
import { InfoBox } from './InfoBox'
import Card from '../Card'

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
