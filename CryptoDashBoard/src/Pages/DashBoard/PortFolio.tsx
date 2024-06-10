
import {  HStack, Icon, Tag, Text, VStack } from "@chakra-ui/react";
import { AiTwotoneInfoCircle } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { BiArrowToTop } from "react-icons/bi";

import ButtonCom from '../../Components/ButtonCom';
const PortFolio = () => {
  return (
    <HStack
   
          mt={5}
          bg="white"
          minH={106}
        
       
          spacing={20}
        
          alignItems={{
            base: "flex-start",
            xl: "center",
          }}
          flexDir={{
            base: "column",
            xl: "row",
          }}
        >
          <HStack
            spacing={10}
            alignItems={{
              base: "flex-start",
              md: "center",
            }}
            flexDir={{
              base: "column",
              md: "row",
            }}
          >
            <VStack alignItems={"start"}>
              <HStack>
                <Text color={"gray"} fontWeight={"600"}>
                  Total Portfolio Value
                </Text>
                <Icon as={AiTwotoneInfoCircle}></Icon>
              </HStack>

              <Text fontSize={24} fontWeight="bold">
                ₹ 112,312.24
              </Text>
            </VStack>

            <VStack alignItems={"start"}>
              <Text color={"gray"} fontWeight={"600"}>
                Wallet Balance
              </Text>
              <HStack spacing={10}>
                <HStack>
                  <Text fontSize={24} fontWeight="bold">
                    22.39401000
                  </Text>
                  <Tag>BTC</Tag>
                </HStack>
                <HStack>
                  <Text fontSize={24} fontWeight="bold">
                    ₹1,300.00
                  </Text>
                  <Tag>INR</Tag>
                </HStack>
              </HStack>
            </VStack>

            <HStack></HStack>
          </HStack>

          <HStack>
            <ButtonCom>
              <HStack>
                <HiDownload></HiDownload>
                <Text>Deposit</Text>
              </HStack>
            </ButtonCom>

            <ButtonCom>
              <HStack>
                <BiArrowToTop> </BiArrowToTop>
                <Text>WithDraw</Text>
              </HStack>
            </ButtonCom>
          </HStack>
        </HStack>
  )
}

export default PortFolio