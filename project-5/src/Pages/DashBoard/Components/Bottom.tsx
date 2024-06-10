import { Button, VStack ,Text} from '@chakra-ui/react'
import React from 'react'


const Bottom = ({text, heading,inverted,imgUrl}) => {
  return (
    <VStack bg={  inverted? "#FFFFFF":"#5f00d9"} 
      p={4}
    style={{ boxSizing: "border-box" }}
    borderRadius={10} 
    alignItems={"flex-start"} 
    spacing={2}
    bgImage={imgUrl}
    >

  
    <Button bg={inverted?"#5f00d9":"#FFFFFF"}  color={inverted?"white":"#5f00d9"}  h={7} borderRadius={"full"} 
     _hover={
      {  
        bg:inverted?"#923fff":"lightgray"
    
      }

    }
 
    >{heading}</Button>

    <Text fontSize="18px" fontWeight="bold"  color={inverted?"black":"white"}  >{text}</Text>

    </VStack>

    
  )
}

export default Bottom