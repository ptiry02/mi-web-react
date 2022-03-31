import { forwardRef } from 'react'
import styled from 'styled-components'

const Card = forwardRef((props, ref) => (
  <CardWraper ref={ref} style={props.style}>
    {props.children}
  </CardWraper>
))

export default Card

const CardWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1.6rem;
  background-color: #a6a59c;
  box-shadow: 0px 0px 6px black, 2px 2px 12px darkgray;
  width: 20vw;
  height: 100%;
  overflow: scroll;
  border-radius: 1rem;
`
