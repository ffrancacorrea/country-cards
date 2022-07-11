import { useEffect } from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 100%;
  min-width: 300px;
  height: 450px;
  border: 1px solid transparent;
  border-radius: 2%;
  color: white;
  background-image: ${({ image }) =>
    `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${image})`};
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 5px;
  padding-right: 20px;
`;
const Card = ({ isSelected, title, info, image }) => {
  return <Wrapper image={image}>{title}</Wrapper>;
};

export default Card;
