import { HStack, Heading, Icon } from "@chakra-ui/react"
import { HiMiniUserCircle } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  
  } from '@chakra-ui/react'

const TopNav = ({title ,onOpen}) => {
  return (
    <HStack   justify="space-between"    h={"64px"} maxW="77rem" bg="white">
      <Icon 
      display={{
        base:"block",
        lg:"none"
      }}
      as={MdOutlineMenu}   onClick={onOpen} >
        

      </Icon>

      
        <Heading ml={112} fontSize={24} >
            {title}
        </Heading>

        <Menu >
  <MenuButton marginRight="50" >
    <Icon  fontSize={"45px"} as={HiMiniUserCircle}/>  
  </MenuButton>
  <MenuList>
    <MenuItem>LogOut</MenuItem>
    <MenuItem>Dashboard</MenuItem>
    
  </MenuList>
</Menu>

    </HStack>
  )
}

export default TopNav