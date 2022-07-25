import React from "react";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Header from "../Header";
import Card from "../Card";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: ${({ banner }) =>
    `linear-gradient(to bottom,  rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner})`};
  background-size: cover;

  transition-property: all;
  transition-duration: 2s;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  margin-top: 30vh;
`;
const RegionInfo = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 0 70px;
  text-align: center;
  width: 100%;
  h1 {
    font-size: 80px;
  }
  p {
    text-align: justify;
    font-size: 20px;
    background-color: white;
    color: #222;
    border: 2px solid transparent;
    border-radius: 5px;
    padding: 30px;
  }
`;
const RegionCards = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;

const Landing = ({ data }) => {
  const [selectedRegion, setSelectedRegion] = useState({});
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    console.log("isSelected", selectedRegion);
  }, [selectedRegion]);

  if (data)
    return (
      <Wrapper banner={selectedRegion.banner || data.banner}>
        <Header
          data={data}
          getSelectedRegion={(region) => setSelectedRegion(region)}
        ></Header>
        <Container>
          <RegionInfo>
            {Object.keys(selectedRegion).length !== 0 ? (
              <div>
                <h1>{selectedRegion.name}</h1>
                <p>{selectedRegion.info}</p>
              </div>
            ) : (
              <div>
                <h1>{data.country}</h1>
                <p>{data.info}</p>
              </div>
            )}
          </RegionInfo>
          <RegionCards>
            {Object.keys(selectedRegion).length !== 0 && (
              <Swiper
                //spaceBetween={300}
                breakpoints={{
                  "@0.5": {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 250,
                  },
                  "@1.00": {
                    slidesPerView: 2,
                    spaceBetween: 300,
                  },
                  "@1.50": {
                    slidesPerView: 3,
                    spaceBetween: 300,
                  },
                }}
                slidesPerView={3}
                centeredSlides={true}
                initialSlide={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {selectedRegion.states.map((state) => (
                  <SwiperSlide>
                    {" "}
                    <Card
                      onClick={() => {
                        console.log("clicked");
                        setSelectedState(state.name);
                      }}
                      title={state.name}
                      image={state.image}
                      isSelected={selectedState === state.name}
                    ></Card>
                  </SwiperSlide>
                ))}
                ...
              </Swiper>
            )}
          </RegionCards>
        </Container>
      </Wrapper>
    );
};

export default Landing;
