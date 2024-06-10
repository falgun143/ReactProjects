import { Box, Container,  Flex,  useDisclosure } from "@chakra-ui/react";
import SideNav from "../Components/SideNav";
import TopNav from "../Components/TopNav";
import SideDrawer from "./SideDrawer";



const DashBoardlayout = ({title, children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      
      <Box  display={{
        base: "none",
        lg: "flex",
       
      }}>
      <SideNav ></SideNav>
       </Box>
    
    <SideDrawer  isOpen={isOpen}  onClose={onClose}  ></SideDrawer>
    <Box flexGrow={1}>

    <TopNav title={title}   onOpen={onOpen} ></TopNav>
    <Container  maxW="68rem"   h="calc(100vh-88px)">
      {children}
    </Container>
    

    </Box>
    
  </Flex>
  )
}

export default DashBoardlayout