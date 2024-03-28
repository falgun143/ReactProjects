import React from "react";
import styled from "styled-components";
import { BASE_URL, Button } from "../App"; // I

const DisplayData = ({ Food }) => {
  return (
    <FoodContainer>
      <FoodCards>
        {Food.map((food) => (
          <FoodCard>
            <div style={{ display: "flex" }}>

              <div style={{ padding: "7px 13px" }}>
                <img src={BASE_URL + food.image}></img>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "end",
                  padding: "12px",
                }}
              >
                <div>
                <h4>{food.name}</h4>
                <p style={{ fontSize: "12px" }}>{food.text}</p>
                </div>
             
                <Button
                style={{
                  display:"flex",
                  justifyContent: "center",
                  width:"60px",
                  fontSize: "12px",
                }}
              >
                ${food.price.toFixed(2)}
              </Button>
              </div>

             
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodContainer>
  );
};

export default DisplayData;

const FoodContainer = styled.div`
min-height: calc(100vh - 262px);
  background-image: url("/bg.png");
  background-size: cover;
  
`;

const FoodCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
  font-size: 16px;
  font-weight: 500;
  row-gap: 32px;
  column-gap: 20px;
  padding: 60px 150px;
`;

const FoodCard = styled.div`
  width:340px;
  height:167px;
  border-radius: 20px;
  border: 1px solid #d2f7ff;
  background: url(<path-to-image>),
    lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);
`;





