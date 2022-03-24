import { useState } from 'react'
import styled from 'styled-components'
import Menu from './components/menu/Menu'
import MainCard from './components/main-card/MainCard'
import InfoCard from './components/info-card/InfoCard'

const App = () => {
  const [card, setCard] = useState({ id: 'home', show: false })
  const transitionTime = 700

  const handleClick = (data) => {
    if (data === 'home') {
      return (
        setCard({ ...card, show: false }),
        setTimeout(() => {
          setCard({ id: data, show: false })
        }, transitionTime)
      )
    }
    if (data !== 'home' && card.id === 'home') {
      return setCard({ id: data, show: true })
    }
    return (
      setCard({ ...card, show: false }),
      setTimeout(() => {
        setCard({ id: data, show: true })
      }, transitionTime)
    )
  }

  return (
    <MainContainer>
      <Menu handleClick={handleClick} isSelected={card.id} />
      <MainCard className="main" />
      <InfoCard id={card.id} show={card.show} timeout={transitionTime} />
    </MainContainer>
  )
}

export default App

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 50%;
  column-gap: 20px;
`
