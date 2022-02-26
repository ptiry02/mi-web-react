import Menu from "./components/Menu";
import MainCard from "./components/MainCard";
import styled from "styled-components";

const App = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    column-gap: 20px;
  `;
  return (
    <Container>
      <Menu />
      <MainCard />
    </Container>
  );
};

export default App;
