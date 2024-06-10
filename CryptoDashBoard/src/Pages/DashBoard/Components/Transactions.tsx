
import { CustomCard } from '../../../Chakra/CustomCard'
import { HiCurrencyRupee } from "react-icons/hi2";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { AiFillDollarCircle } from "react-icons/ai";
import { VStack,Text, HStack, Box, Icon, Grid, Button } from '@chakra-ui/react';

const Transactions = () => {

    const transactions=[
        {
            icon:HiCurrencyRupee,
            text:"INR Deposit",
            timestamp:"2022-06-09 7:06 PM",
            money:"+ ₹81,123.10"
        },
        {
            icon:PiCurrencyBtcFill,
            text:"BTC Sell",
            timestamp:"2022-06-09 7:06 PM",
            money:"- 12.48513391 BTC"
        },
        {
            icon:AiFillDollarCircle,
            text:"INR Deposit",
            timestamp:"2022-06-09 7:06 PM",
            money:"+ ₹81,123.10"
        },

    ]
  return (
    <CustomCard >
     
            <Text mb={7} color="#535D66" >Recent Transactions</Text>

            <VStack spacing={7} mb={3}>

             {transactions.map((transaction)=>(
                 <HStack justify={"space-between"} w="full" h="full">

                 <HStack spacing={5}>
                   <Grid    placeItems={"center"}  boxSize={10} backgroundColor={"#eeeef4"}  borderRadius={"full"} >  
                   <Icon  fontSize={25}   as= {transaction.icon}   ></Icon>
                  
                   </Grid>
                     
                     <VStack spacing={0} >
                        <Text>   {transaction.text}</Text>
                      <Text fontSize={14} color={"#797E82"} >  {transaction.timestamp}</Text>
                       
                     </VStack>

                 </HStack>

                 <Text  fontWeight={"bold"} > {transaction.money}</Text>

                

             </HStack>
             ))}

            </VStack>

            <Button height={100} >View All</Button>

         

       

    </CustomCard>
  )
}

export default Transactions