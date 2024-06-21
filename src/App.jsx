
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./CRUD/Home"
import CreateUser from "./CRUD/CreateUser"
import User from "./CRUD/User"
import WelcomePage from "./CRUD/WelcomePage"
import AboutUs from "./CRUD/AboutUs"
import EditUser from "./CRUD/EditUser"
import Getstarted from "./CRUD/Getstarted"

const App=()=>{
    return(
        <div>


            <BrowserRouter>

                <Home/>
                
                <Routes>
                    <Route element={<WelcomePage/>} path="/"/>
                    <Route element={<CreateUser/>} path="/createuser"/>
                    <Route element={<User/>} path="/user"/>
                    <Route element={<AboutUs/>} path="/aboutus"/>
                    <Route element={<EditUser/>} path="/edituser/:id"/>
                    <Route element={<Getstarted/>} path="/getstarted"/>
                </Routes>
                
            </BrowserRouter> 
            

        </div>
    )
}
export default App