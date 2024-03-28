import { Container, Flex } from "@chakra-ui/react";
import "../App.css";
import YourDetails from "../Components/YourDetails";
import YourCart from "../Components/YourCart";



const Cart = () => {
  return (
    <Container maxW="container.lg" p="10">
        {/* see py , this are called as break points */}
        {/* // See the documentation of chakra ui at 
        https://chakra-ui.com/docs/styled-system/responsive-styles */}
        <Flex h={{
          base:"auto",
          md:"100vh"
        }} py={[0,10,20]} gap={10}
        direction={{
          base:"column-reverse",
          md:"row"
        }}
        >
          <YourDetails></YourDetails>
          <YourCart></YourCart>
        </Flex>
      </Container>
    
  )
}

export default Cart


