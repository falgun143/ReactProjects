import { Avatar, Button, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const PostCard = () => {
  return (
    <VStack w="320px"   boxShadow="md" p={"5"} gap={"5"} >
        <Image src="./laptop.png"></Image>
        <HStack spacing={"12"} >
          <Avatar></Avatar>
          <Text fontWeight={"800"}>Joe Doe</Text>
          <Text fontSize="xs">1 min ago.</Text>
        </HStack>

        <VStack  align="flex-start"  >
          <Heading fontSize="23"  >Web Developer</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, earum.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, earum.
          </Text>
          <Button bg="#8AC919" width="100px" alignSelf={"flex-end"}   as={Link} to ="/post"  >View</Button>
        </VStack>
    </VStack>
  )
}

export default PostCard