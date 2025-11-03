import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./Components/Main/Home";
import { Applayout } from "./Applayout";

function App() {
  const router=createBrowserRouter([
    {path:"/",element:<Applayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
