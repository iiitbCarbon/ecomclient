import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";
import SignUp from "../pages/SignUp.jsx";
import AdminPanel from "../pages/AdminPanel.jsx";
import AllUsers from "../pages/AllUsers.jsx";
import AllProducts from "../pages/AllProducts.jsx";
import CategoryProduct from "../pages/CategoryProduct.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Cart from "../pages/Cart.jsx";
import SearchProduct from "../pages/SearchProduct.jsx";

const router = createBrowserRouter(
    [
        {
            path : "/" ,
            element : <App/>,
            children : [{
            path : "" ,
            element : <Home/>
            },

            {
                path : "login",
                element : <Login/>
            },
            {
                path : "forgot-password",
                element : <ForgotPassword/>
            },
            {
                path : "sign-up",
                element : <SignUp/>
            },
            {
            path : "product-category",
            element : <CategoryProduct/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : "search" ,
                element :<SearchProduct/>
            },
            {
                path : "admin-panel" ,
                element : <AdminPanel/>,
                children : [
                    {
                        path : "all-users" ,
                        element : <AllUsers/>
                    } ,
                    {
                        path : "all-products" ,
                        element : <AllProducts/>
                    } ,
                ]
            },
            ]
        }
    ]
)

export default router