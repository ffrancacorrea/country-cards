import { useEffect } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  min-width: 350px;
  height: 550px;
  border: 1px solid transparent;
  border-radius: 2%;
  color: white;
  background-image: ${({ image }) =>
    `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  //transform: ${(isSelected) => isSelected && "scale(1.2)"};
`;
const Title = styled.h1``;
const Card = ({ isSelected, title, info, image }) => {
  return (
    <Wrapper image={image} isSelected={isSelected}>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Card;
