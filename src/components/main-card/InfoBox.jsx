import styled from "styled-components";

export const InfoBox = () => {
  return (
    <Info>
      <Personal>
        <Icon className="fas fa-envelope"> tirypaul@gmail.com</Icon>
        <Icon className="fas fa-phone-square"> +34 679 704 916</Icon>
      </Personal>
      <Social>
        <Icon
          className="fab fa-linkedin"
          href="https://www.linkedin.com/in/paul-tiry/"
        >
          {`   /paul-tiry`}
        </Icon>
        <Icon
          className="fab fa-facebook-square"
          href="https://www.facebook.com/tiry1"
        >
          {`   /tiry1`}
        </Icon>
      </Social>
    </Info>
  );
};

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 2rem;
  background-color: #489991;
  border-radius: 10px;
  box-shadow: 0px 0px 3px black, 2px 2px 6px darkgray;
  padding: 1.2rem 2.3rem;
`;
const Personal = styled.div`
  display: flex;
  flex-direction: column;
`;
const Social = styled.div`
  display: flex;
  flex-direction: column;
`;
const Icon = styled.a`
  color: black;
  margin-bottom: 0.7rem;
  font-weight: bold;
  text-decoration: none;
  :hover {
    color: #a6a59c;
  }
`;
