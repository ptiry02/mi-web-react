import styled from "styled-components";
import profilePic from "../../assets/images/yo_en_moto.jpg";

export const ProfilePic = () => {
  return (
    <Photo>
      <img src={profilePic} alt="Foto perfil" id="profilePic" />
    </Photo>
  );
};

const Photo = styled.div`
  height: 200px;
  width: fit-content;
  margin: 0px auto;
  overflow: hidden;
  border-radius: 99999px;
  box-shadow: 0px 0px 3px black, 2px 2px 6px darkgray;
  img {
    height: 200px;
  }
`;
