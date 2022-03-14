import styled from "styled-components";

const Button = ({ ident, label, isSelected, onClick = () => {} }) => {
  return (
    <Btn id={ident} onClick={onClick} isClicked={isSelected}>
      {label.toUpperCase()}
    </Btn>
  );
};
export default Button;

const Btn = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  background-color: ${({ isClicked }) => (isClicked ? "#f2c24e" : "#489991")};
  text-decoration: none;
  color: black;
  padding: 0.5rem 0;
  padding-right: ${({ isClicked }) => (isClicked ? "3.5rem" : "4rem")};
  padding-left: ${({ isClicked }) => (isClicked ? "1rem" : "0.5rem")};
  transition: all 300ms;
  cursor: pointer;
  :hover {
    background-color: #f2c24e;
    padding-left: 1rem;
    padding-right: 3.5rem;
  }
`;
