import React from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Card from "../Card";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: ${({ banner }) =>
    `linear-gradient(to bottom,  rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${banner})`};
  background-size: cover;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: green;
  position: absolute;
`;
const Icon = styled.div`
  padding: 10px;
  img {
    width: 40px;
  }
`;
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  .btn {
    background-color: #04aa6d;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .content {
    display: none;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .content a:hover {
    background-color: #ddd;
  }

  &:hover .content {
    display: block;
  }

  &:hover .dropbtn {
    background-color: #3e8e41;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
`;
const Info = styled.div`
  width: 100%;
  height: 100vh;
`;
const RegionCards = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  height: 100%;
  margin-top: 40vh;
  overflow: scroll;
  color: red;
`;
const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Landing = ({ data }) => {
  const [selectedRegion, setSelectedRegion] = useState({});
  const [selectedState, setSelectedState] = useState({});

  if (data)
    return (
      <Wrapper banner={selectedRegion.banner || data.banner}>
        <Header>
          <Icon>
            <img src={data.icon}></img>{" "}
          </Icon>
          <Dropdown class="dropdown">
            <div class="btn">Dropdown</div>
            <div class="content">
              {data.regions.map((region) => (
                <a href="#" onClick={() => setSelectedRegion(region)}>
                  {region.name}
                </a>
              ))}
            </div>
          </Dropdown>
        </Header>
        <Container>
          <Info></Info>
          {Object.keys(selectedRegion).length !== 0 && (
            <RegionCards>
              {data.regions.map(
                (region) =>
                  selectedRegion === region && (
                    <CardWrapper>
                      {region.states.map((state) => (
                        <Card
                          onClick={() => setSelectedState(state)}
                          title={state.name}
                          image={state.image}
                          isSelected={selectedState === state}
                        ></Card>
                      ))}
                    </CardWrapper>
                  )
              )}
            </RegionCards>
          )}
        </Container>
      </Wrapper>
    );
};

export default Landing;
