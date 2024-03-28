import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import DashBoardlayout from "../../Components/DashBoardlayout";
import TransactionTable from "../Transactions/Components/TransactionTable";
import { CiSearch } from "react-icons/ci";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { GoDownload } from "react-icons/go";
import ButtonCom from "../../Components/ButtonCom";

const Transactions = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "WithDraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];

  return (
    <DashBoardlayout title="Transactions">
      <Flex 
      justifyContent={{
        base:"center",
        md:"flex-end"
      }}
     
      
      mt="2"
      mb="2"
      >
        <ButtonCom>
          <Icon as={GoDownload}></Icon>
          <Text>Export CSV</Text>
        </ButtonCom>
      </Flex>

      <Card >
        <Tabs>
          <HStack justifyContent={"space-between"}
          flexDir={{
            base:"column",
            md:"row",
            
          }}
          
          >
            <TabList mt="4" p="3">
              {tabs.map((tab) => (
                <Tab display={"flex"} gap={2} color={"#4a2be3"}>
                  <Text color={"black"}>{tab.name}</Text>
                  <Tag borderRadius={"full"}>{tab.count}</Tag>
                </Tab>
              ))}
            </TabList>
            <InputGroup maxW={195}>
              <InputLeftElement pointerEvents="none">
                <Icon as={CiSearch}></Icon>
              </InputLeftElement>
              <Input type="tel" placeholder="Phone number" />
            </InputGroup>
          </HStack>



          <TabPanels>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashBoardlayout>
  );
};

export default Transactions;
