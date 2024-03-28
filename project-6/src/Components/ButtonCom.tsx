import { Box,Button } from '@chakra-ui/react'


const ButtonCom = ({children}) => {
  return (
  

   
   <Button 
   bg={"#5f00d9"}  
   color={"white"}  
   display={"flex"} 
   gap={2}
borderRadius={10}
_hover={{
  bg:"#7512f6bc"
}}
fontSize={"15px"}
   >{children} </Button>
  
  )
}

export default ButtonCom