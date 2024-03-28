import { CustomCard } from "../../../Chakra/CustomCard";
import { VStack, HStack, Text, Icon, Image, Flex } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import ButtonCom from "../../../Components/ButtonCom";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const PricingSection = () => {
  const timing = ["7:15 PM", "7:30 PM", "7:45 PM", "8:15 PM"];
  const type = ["1H", "1D", "1W", "1M"];
  return (
    <CustomCard>
    
        <HStack spacing={20} alignItems={"flex-start"}>
          <VStack align={"flex-start"}>
            <Text color={"gray"} fontWeight={"600"}>
              Wallet Balance
            </Text>

            <HStack fontSize={15} fontWeight="bold">
              <Text fontSize={24} fontWeight="bold">
                $22.39401000
              </Text>
              <HStack color={"#009e69"}>
                <Icon as={BsArrowUpRight}></Icon>
                <Text>0.04%</Text>
              </HStack>
            </HStack>
          </VStack>

          <HStack>
            <ButtonCom>
              <FaCirclePlus></FaCirclePlus>Buy
            </ButtonCom>

            <ButtonCom>
              <FaCircleMinus></FaCircleMinus>Sell
            </ButtonCom>

          </HStack>
        </HStack>

       
        <Tabs variant="soft-rounded">
        <Flex justify={"end"} >
        <TabList    bg={"#f3f3f7"} >
         
         {type.map((type) => {
           return <Tab>{type}</Tab>;
         })}   
       </TabList>
        </Flex>
          <TabPanels>
            <TabPanel    >
              <Image    w="524px" src="./Graph.png"   ></Image>
              <HStack   justify={"space-between"}  color={"gray"}>
          {timing.map((time) => {
            return <Text>{time}</Text>;
          })}
        </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>

      

      
    
    </CustomCard>
  );
};

export default PricingSection;
