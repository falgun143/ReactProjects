import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Flex
        bg="#415c14"
        justifyContent={"space-between"}
        alignItems={"center"}
        px={"5"}
        py={"2"}
      >
        <IconButton
          ref={btnRef}
          onClick={onOpen}
          variant="ghost"
          fontSize="2xl"
          aria-label={""}
          _hover={{ bg: "white" }}
        >
          <FaBars></FaBars>
        </IconButton>

        <Menu>
          <MenuButton >
          <Avatar></Avatar>
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
          </MenuList>
        </Menu>

        
      </Flex>
    </>
  );
};

export default Navbar;
