// import { Container, Flex } from "@chakra-ui/react";
// import "./App.css";
// import YourDetails from "./Components/YourDetails";
// import YourCart from "./Components/YourCart";

// function App() {
//   return (
//     <>
//       <Container maxW="container.lg" p="10">
//         {/* see py , this are called as break points */}
//         {/* // See the documentation of chakra ui at 
//         https://chakra-ui.com/docs/styled-system/responsive-styles */}
//         <Flex h={{
//           base:"auto",
//           md:"100vh"
//         }} py={[0,10,20]} gap={10}
//         direction={{
//           base:"column-reverse",
//           md:"row"
//         }}
//         >
//           <YourDetails></YourDetails>
//           <YourCart></YourCart>
//         </Flex>
//       </Container>
//     </>
//   );
// }
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import PostPage from "./Pages/PostPage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/"  element={<Home></Home>}  ></Route>
        <Route path="/cart"   element={<Cart></Cart>} ></Route>
        <Route path="/post" element={<PostPage></PostPage>}  ></Route>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
