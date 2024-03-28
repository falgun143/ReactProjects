import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import DisplayData from "./components/DisplayData";

export const BASE_URL = "http://localhost:9000"; // I
const App = () => {
  const [Food, setFood] = useState([]);
  const [FilteredFood, SetFilteredFood] = useState([]);
  const [SelectedButton, SetSelectedButton] = useState("All");

  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setFood(res.data);
      SetFilteredFood(res.data);
    });
  }, []);

  function ChangeFood(e) {
    const SerachFood = e.target.value;

    if (SerachFood === null) {
      SetFilteredFood(null);
    }
    // Important
    const filterfood = Food.filter((food) =>
      food.name.toLowerCase().includes(SerachFood.toLowerCase())
    );

    SetFilteredFood(filterfood);
  }

  function Filteredbtnfood(type) {
    if (type == "All") {
      SetFilteredFood(Food);
      SetSelectedButton("All");
      return;
    }

    const filterfood = Food.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    SetFilteredFood(filterfood);
    SetSelectedButton(type);
  }

  return (
    <>
      <Container>
        <TopContainer>
          <div>
            <img src="/Foody Zone.png"></img>
          </div>
          <div>
            <input onChange={ChangeFood} placeholder="Search Food..."></input>
          </div>
        </TopContainer>

        <FilterContainer>
        {/* <Button onClick={ Filteredbtnfood("All")}>All</Button>  This is wrong as it will lead to infinite loop */}
          <Button onClick={() => Filteredbtnfood("All")}>All</Button>
          <Button onClick={() => Filteredbtnfood("BreakFast")}>
            Breakfast
          </Button>
          <Button onClick={() => Filteredbtnfood("Lunch")}>Lunch</Button>
          <Button onClick={() => Filteredbtnfood("Dinner")}>Dinner</Button>
        </FilterContainer>
        <DisplayData Food={FilteredFood}></DisplayData>
      </Container>
    </>
  );
};

export default App;

const Container = styled.div``;

const TopContainer = styled.div`
  margin: 0 auto;
  padding: 80px 120px;
  display: flex;
  justify-content: space-between;
  background-color: #323232;
  align-items: center;

  input {
    border: none;
    box-sizing: border-box;
    width: 280;
    height: 40;
    background-color: transparent;

    padding: 8px;
    border: 1px solid red;
    border-radius: 5px;
  }

  @media(0< width <780px){
    flex-direction: column;
    gap:40px;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 31px;
`;

export const Button = styled.div`
  box-sizing: border-box;
  height: 31px;

  background-color: #ff4343;
  color: white;
  font-size: 16px;
  padding: 6px 12px;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #e41818;
    cursor: pointer;
  }
`;
