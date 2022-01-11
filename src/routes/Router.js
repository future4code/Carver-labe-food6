import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import RestaurantsPage from "../pages/RestaurantsPage/RestaurantsPage";
import CartPage from "../pages/CartPage/CartPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddAddressPage from "../pages/AddAddressPage/AddAddressPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/signUp">
                    <SignUpPage />
                </Route>
                
                <Route exact path="/profile">
                    <ProfilePage />
                </Route>

                <Route exact path="/restaurants/:restaurantId">
                    <RestaurantsPage />
                </Route>

                <Route exact path="/cart">
                    <CartPage />
                </Route>

                <Route exact path="/address">
                    <AddAddressPage />
                </Route>
                
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;