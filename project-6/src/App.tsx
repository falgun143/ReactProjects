
import './App.css'
import DashBoard from './Pages/DashBoard/DashBoard'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Transactions from './Pages/Transactions/Transactions';
import Support from './Pages/Support/Support';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard></DashBoard>
  },
  {
    path: "/transactions",
    element: <Transactions></Transactions>
  },
  {
    path: "/support",
    element: <Support></Support>
  },
]);
function App() {


  return (
    <>
     
      <RouterProvider router={router} />
    </>
  )
}

export default App
