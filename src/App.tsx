import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RegistPage } from "./pages/RegistPage/RegistPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { PasswordError } from "./pages/PasswordError/PasswordError";

const router = createBrowserRouter([
  {
    path:"/",
    element:<LoginPage/>
  },
  {
    path:"/main-page",
    element:<MainPage/>
  },
  {
    path:"/regist-page",
    element:<RegistPage/>
  },
  {
    path:"/profil-page",
    element:<ProfilePage/>
  },
  {
    path:"/password-page",
    element:<PasswordError/>
  },
])

function App() {

  return (
    <RouterProvider router={router}>
    </RouterProvider>
    
  );
}

export default App;
