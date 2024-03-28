import { GridItem, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import DashBoardlayout from "../../Components/DashBoardlayout";
import PricingSection from "./Components/PricingSection";
import PortFolio from "./PortFolio";
import Transactions from "./Components/Transactions";
import Bottom from "./Components/Bottom";


const DashBoard = () => {
  const columnCount = useBreakpointValue({ base: 1, xl: 2 });

  
  return (
    <>
      <DashBoardlayout title="Dashboard">
        <SimpleGrid columns={columnCount} rowGap={15} columnGap={4} >
          <GridItem colSpan={2}>
            <PortFolio></PortFolio>
          </GridItem>

          <GridItem colSpan={columnCount===1 ?2:1}>
            <PricingSection></PricingSection>
          </GridItem>

          <GridItem colSpan={columnCount===1 ?2:1}>
            <Transactions></Transactions>
          </GridItem>

          <GridItem colSpan={columnCount===1 ?2:1}>
            <Bottom    imgUrl="./public/Dot.png" inverted={true}  heading={"Loans"} text={"Learn more about Loans Keep your Bitcoin, access it's value without selling it"}></Bottom>
          </GridItem>

          
          <GridItem colSpan={columnCount===1 ?2:1}>
            <Bottom  imgUrl="./public/grid.png"  inverted={false} heading={"Contact"} text={"Learn more about our real estate, mortgage, and  corporate account services"}></Bottom>
          </GridItem>

        </SimpleGrid>
      </DashBoardlayout>
    </>
  );
};

export default DashBoard;
