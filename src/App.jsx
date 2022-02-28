import { MainCard } from "./components/MainCard";
import styled from "styled-components";
import { Menu } from "./components/Menu";

export const App = () => {
  return (
    <Container>
      <Menu />
      <MainCard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  column-gap: 20px;
`;
