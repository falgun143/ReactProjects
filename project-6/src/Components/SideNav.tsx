import { MdDashboard } from "react-icons/md";
import { LuArrowDownUp } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";


import { Box, HStack, Heading, Icon, Text, VStack } from "@chakra-ui/react";

const SideNav = () => {
  const items = [
    {
      icon: <MdDashboard></MdDashboard>,
      link:"/",
      text: "Dashboard",
    },
    {
      icon: <LuArrowDownUp></LuArrowDownUp>,
      link:"/transactions",
      text: "Transactions",
    },
  ];

  return (
    <VStack
    bg="white"
      justifyContent={"space-between"}
      w={{
        base:"full",
        lg:"256px"
      }}
      h="100vh"
      boxShadow={{
        base:"none",
        lg:"lg"
      }}
    >

      
      <Box>
        <Heading
          fontSize={"20px"}
          color={"#4A2BE3"}
          mt="54px"
          ml="28px"
          textAlign="center"
        >
          @DoSomeCoding
        </Heading>
        <VStack my={"5"}>
          {items.map((item) => (
            <Link to={item.link} >
            <HStack
              cursor={"pointer"}
              w="90%"
              h="10"
              ml="12"
              mr="12"
              borderRadius="5px"
              justifyContent="flex-start"
              alignItems="center"
              p="5"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
              color="#797E82"
            >
              <Icon fontSize="22">{item.icon}</Icon>
              <Text fontSize="14px" fontWeight={"bold"}>
                {item.text}
              </Text>
            </HStack>
            </Link>
          ))}
        </VStack>
      </Box>

    
    

      <Box
        w="full"
        display="flex"
        justifyContent={"flex-end"}
        pr={"7"}
        marginBottom={"5"}
      >
          <Link to="/support">
        <HStack
          cursor={"pointer"}
          w="full"
          h="10"
          borderRadius="5px"
          justifyContent="flex-start"
          alignItems="center"
          p="5"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
          color="#797E82"
        >
          <Icon fontSize="22">
            <BiSupport></BiSupport>
          </Icon>
          <Text fontSize="14px" fontWeight={"bold"}>
            Support
          </Text>
        </HStack>
        </Link>
      </Box>
   
    </VStack>
  );
};

export default SideNav;
