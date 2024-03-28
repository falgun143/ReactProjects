import {
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Select,
  Text,
  Textarea,
  VStack,
  Checkbox,
  Button,
} from "@chakra-ui/react";

const YourDetails = () => {
  return (
    <div>
      <VStack w="full" h="full" p={15} align={"flex-start"} spacing={10}>
        <VStack align={"flex-start"} spacing={2}>
          <Heading>Your Details</Heading>
          <Text>If You already have an account ,click here to login.</Text>
        </VStack>

        <SimpleGrid columns={2} columnGap={2} rowGap={7}>
          <GridItem colSpan={1}>
            <FormLabel>Enter First Name</FormLabel>
            <Input placeholder="EnterYourFirstName"></Input>
          </GridItem>

          <GridItem colSpan={1}>
            <FormLabel>Enter Last Name</FormLabel>
            <Input placeholder="EnterYourLastName"></Input>
          </GridItem>

          <GridItem colSpan={2}>
            <FormLabel>Address</FormLabel>
            <Textarea placeholder="Address"></Textarea>
          </GridItem>

          <GridItem colSpan={1}>
            <FormLabel>City</FormLabel>
            <Input placeholder="Hyderabad"></Input>
          </GridItem>

          <GridItem colSpan={1}>
            <FormLabel>Country</FormLabel>
            <Select placeholder="India">
              <option value="option1">India</option>
              <option value="option2">USA</option>
              <option value="option3">Russia</option>
            </Select>
          </GridItem>

          <GridItem colSpan={2}>
            <Checkbox>Ship to the billing address.</Checkbox>
          </GridItem>

          <GridItem colSpan={2}>
            <Button  variant="primary" w="full" bg="#8AC919" >
              Place Order
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </div>
  );
};

export default YourDetails;
