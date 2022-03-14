import styled from "styled-components";
import Slide from "@mui/material/Slide";

const FormCard = ({ show, container }) => {
  return (
    <Slide
      direction="right"
      in={show}
      timeout={700}
      unmountOnExit={true}
      container={() => {
        return document.getElementById(container);
      }}
    >
      <Card>
        <h1>FORMACIÓN</h1>
        {/*{ExpInfoItems.map((item) => (
          <Wrapper cardId={cardId} key={item.key}>
            <Job>{item.job}</Job>
            <p>{item.date}</p>
            <article>{item.functions}</article>
          </Wrapper>
        ))}*/}
      </Card>
    </Slide>
  );
};
export default FormCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1.6rem;
  background-color: #a6a59c;
  box-shadow: 0px 0px 6px black, 2px 2px 12px darkgray;
  width: 25vw;
  height: 100%;
  overflow-y: scroll;
`;
/*
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid gray;
  margin-bottom: 0.5rem;
  padding: 0.6rem 1.2rem;
`;

const Job = styled.h3`
  margin: 0;
`;*/
