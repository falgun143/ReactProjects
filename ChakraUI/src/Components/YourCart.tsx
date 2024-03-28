import { Heading, Text, VStack, HStack, Image, Button,useColorMode, useColorModeValue } from "@chakra-ui/react";

const YourCart = () => {


    const { toggleColorMode } = useColorMode();
    const bgColor= useColorModeValue("gray.50","whiteAlpha.50");
  return (
    <div>
      <VStack w="full" h="full" p={15} align={"flex-start"} spacing={10}  bg={bgColor}>
        <VStack align={"flex-start"} spacing={2}>
          <Heading>Your Cart</Heading>
          <Text>If price is too hard on your eyes,</Text>
          <Button  onClick={toggleColorMode}  variant={'outline'} >try changing the theme.</Button>
        </VStack>

        <HStack w="full" justifyContent={"space-between"} align={"center"}>
          <HStack>
            <Image src="Skateboard.png"></Image>
            <VStack>
              <Heading fontSize={"25px"}>Penny board</Heading>
              <Text>PNYCADDDO2977</Text>
            </VStack>
          </HStack>

          <HStack>
            <Heading size="sm">$111.2</Heading>
          </HStack>
        </HStack>

        <VStack w="full">
          <HStack w="full" justifyContent={"space-between"}>
            <Text>SubTotal</Text>
            <Heading size="sm">$119.00</Heading>
          </HStack>

          <HStack w="full" justifyContent={"space-between"}>
            <Text>Shipping</Text>
            <Heading size="sm">$19.00</Heading>
          </HStack>

          <HStack w="full" justifyContent={"space-between"}>
            <Text>Taxes(estimated)</Text>
            <Heading size={"sm"}>$23.80.00</Heading>
          </HStack>

          <br></br>
          <HStack w="full" justifyContent={"space-between"}>
            <Text>Total</Text>
            <Heading size={"l"}>$162.00</Heading>
          </HStack>
        </VStack>
        <hr></hr>
      </VStack>
    </div>
  );
};

export default YourCart;
