import { useRef } from 'react'
import Slide from '@mui/material/Slide'
import Exp from './Exp'
import Card from '../Card'

const InfoCard = ({ id, show, timeout }) => {
  const ref = useRef()
  console.log(ref)
  return (
    <Slide direction="left" in={show} timeout={timeout} unmountOnExit={true}>
      <Card ref={ref} id={id}>
        {id === 'exp' && <Exp />}
        {id === 'form' && <h1>PRÓXIMAMENTE</h1>}
        {id === 'skills' && <h1>PRÓXIMAMENTE</h1>}
        {id === 'contact' && <h1>PRÓXIMAMENTE</h1>}
      </Card>
    </Slide>
  )
}
export default InfoCard
