import { Flex, VStack, Icon, Text, Card, HStack, Textarea, Checkbox, Box } from "@chakra-ui/react";
import DashBoardlayout from "../../Components/DashBoardlayout";
import { MdEmail } from "react-icons/md";
import { Input } from "@chakra-ui/react";
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashBoardlayout title="Support">
      <Flex mt={5} gap={5}>
        <VStack alignItems={"flex-start"} spacing="0" maxW={386}>
          <Icon fontSize="24" as={MdEmail} color="#5f00d9"></Icon>
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            Contact Us
          </Text>
          <Text color={"#535D66"}>
            Have a question or just want to know more? Feel free to reach out to
            us.
          </Text>
        </VStack>

        <Card flexGrow={1} p={6} gap={5}>
          <Text>
            You will receive response within 24 hours of time of submit.
          </Text>
          <HStack>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input  placeholder="Falgun" />
              
            </FormControl>

            <FormControl>
              <FormLabel>SurName</FormLabel>
              <Input placeholder="Pal" />
          
            </FormControl>

          </HStack>

          <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder="email" />
          
            </FormControl>

            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea  placeholder="Your Message"></Textarea>
          
            </FormControl>
           

            <Checkbox defaultChecked>
              I agree with 
           <Box as="span"  color="#5f00d9">Terms and Conditions</Box>
            </Checkbox>
        </Card>
      </Flex>
    </DashBoardlayout>
  );
};

export default Support;
