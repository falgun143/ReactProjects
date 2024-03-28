import { Flex } from "@chakra-ui/react"
import PostCard from "../Components/PostCard"


const Home = () => {
  return (
    <Flex p={12} flexWrap={"wrap"}  gap={"10"} justifyContent={"center"}  >
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
      <PostCard></PostCard>
    
    </Flex>
  )
}

export default Home