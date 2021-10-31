import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../Contexts/AuthProvider';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Header from '../Header/Header';
import Login from '../login/Login';
import Register from '../register/Register';
import Home from '../home/Home';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Categories from '../Categories/Categories';
import Cart from '../Cart/Cart';
import Checkout from '../Checkout/Checkout';
import AddProducts from '../Admin/AddProducts/AddProducts';
import ViewAllProducts from '../Admin/ViewAllProducts/ViewAllProducts';
import AdminHome from '../Admin/AdminHome/AdminHome';
import UpdateProduct from '../Admin/UpdateProduct/UpdateProduct';



const Routes = () => {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/home">
                            <Home/>
                        </Route>
                        <Route path="/admin">
                            <AdminHome/>
                        </Route>
                        <PrivateRoute  path="/categories">
                            <Categories/>
                        </PrivateRoute >
                        <PrivateRoute  path="/services">
                            <Services/>
                        </PrivateRoute >
                        <Route path="/blog/:key">
                            <Blog/>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <Route path="/aboutus">
                            <About></About>
                        </Route> 
                        <PrivateRoute path="/cart/:id">
                            <Cart></Cart>
                        </PrivateRoute>
                        <PrivateRoute path="/checkout">
                            <Checkout></Checkout>
                        </PrivateRoute>
                        <PrivateRoute path="/addproduct">
                            <AddProducts></AddProducts>
                        </PrivateRoute>
                        <PrivateRoute path="/updateproduct/:id">
                            <UpdateProduct></UpdateProduct>
                        </PrivateRoute>
                        <PrivateRoute path="/viewallproduct">
                            <ViewAllProducts></ViewAllProducts>
                        </PrivateRoute>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer/>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
};

export default Routes;