import React from "react";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import {APP_ROUTES} from "../utilities/constants/routes.constants";

import ContactUs from "../components/Customer/ContactUs/contactUs";
import PrivatePolicy from "../components/Customer/PrivatePolicy/PrivatePolicy";
import ViewPrivatePolicy from "../components/Admin/Contents/PrivatePolicy/ViewPrivatePolicy/ViewPrivatePolicy";
import AddPrivatePolicy from "../components/Admin/Contents/PrivatePolicy/AddPrivatePolicy/AddPrivatePolicy";
import UpdatePrivatePolicy from "../components/Admin/Contents/PrivatePolicy/UpdatePrivatePolicy/UpdatePrivatePolicy";
import TermsAndConditions from "../components/Customer/TermsAndConditions/TermsAndConditions";
import ViewTermsAndConditions from "../components/Admin/Contents/Terms&Conditions/ViewTermsAndConditions/ViewTermsAndConditions";
import AddTermsAndConditions from "../components/Admin/Contents/Terms&Conditions/AddTermsAndConditions/AddTermsAndConditions";
import UpdateTermsAndConditions from "../components/Admin/Contents/Terms&Conditions/UpdateTermsAndConditions/UpdateTermsAndConditions";
import AddAboutUs from "../components/Admin/Contents/AboutUs/AddAboutUs/AddAboutUs";
import ViewAboutUs from "../components/Admin/Contents/AboutUs/ViewAboutUs/ViewAboutUs";
import UpdateAboutUs from "../components/Admin/Contents/AboutUs/UpdateAboutUs/UpdateAboutUs";
import AddTeamDetails from "../components/Admin/Contents/TeamDetails/AddTeamDetails";
import ViewTeamDetails from "../components/Admin/Contents/TeamDetails/ViewTeamDetails";
import UpdateTeamDetails from "../components/Admin/Contents/TeamDetails/UpdateTeamDetails";
import ViewDeliveryAddress from "../components/Customer/DeliveryAddress/ViewDeliveryAddress";
import AddDeliveryAddress from "../components/Customer/DeliveryAddress/AddDeliveryAddress";
import UpdateDeliveryAddress from "../components/Customer/DeliveryAddress/UpdateDeliveryAddress";
import MyDeliveries from "../components/Customer/MyDeliveries/MyDeliveries";
import ViewDelivery from "../components/Admin/Delivery/ViewDelivery/ViewDelivery";
import UpdateDelivery from "../components/Admin/Delivery/UpdateDelivery/UpdateDelivery";


//sid's part
import AddBook from "../components/Admin/Contents/Book/AddBook/AddBook";
import AddCategory from "../components/Admin/Contents/Category/AddCategory/AddCategory";
import ViewBook from "../components/Admin/Contents/Book/ViewBook/ViewBook";
import ViewCategory from "../components/Admin/Contents/Category/ViewCategory/ViewCategory";
import UpdateBook from "../components/Admin/Contents/Book/UpdateBook/UpdateBook";
import UpdateCategory from "../components/Admin/Contents/Category/UpdateCategory/UpdateCategory";
import ProductDashboard from "../components/Admin/Contents/ProductDashboard/ProductDashboard";
import Homepage from "../components/Customer/Homepage/Homepage/Homepage";
import ProductPage from "../components/Customer/ProductPage/ProductPage";
import Books from "../components/Customer/Books/Books";
import ViewBookByCategory from "../components/Customer/Books/ViewBookByCategory";
import SearchBooks from "../components/Customer/SearchBooks/SearchBooks";


import {Login, Signup, PersonalDetails, WishList, SearchWishList, ManageAdmins} from "../pages";

import PaymentDashboard from "../pages/Payment/PaymentDashboard";

const AppRoutes = () => {
    const history = createBrowserHistory();

    return(
        <Router history={history}>

            {/**Customer side*/}
            <PublicRoute exact path={APP_ROUTES.LOGIN} Component={Login} />
            <PublicRoute exact path={APP_ROUTES.SIGNUP} Component={Signup} />

            <PublicRoute exact path={APP_ROUTES.USER_PERSONAL_DETAILS} Component={PersonalDetails} />
            <PublicRoute exact path={APP_ROUTES.USER_WISHLIST} Component={WishList} />
            <PublicRoute exact path={APP_ROUTES.WISHLIST_SEARCH} Component={SearchWishList} />

            <PublicRoute exact path={APP_ROUTES.USER_CONTACT_US} Component={ContactUs} />
            <PublicRoute exact path={APP_ROUTES.USER_PRIVATE_POLICY} Component={PrivatePolicy} />
            <PublicRoute exact path={APP_ROUTES.USER_TERMS_AND_CONDITIONS} Component={TermsAndConditions} />

            <PublicRoute exact path={APP_ROUTES.SUPERADMIN_MANAGE_ADMINS} Component={ManageAdmins} />

            <PublicRoute exact path={APP_ROUTES.USER_VIEW_ADDRESS} Component={ViewDeliveryAddress} />
            <PublicRoute exact path={APP_ROUTES.USER_ADD_ADDRESS} Component={AddDeliveryAddress} />
            <PublicRoute exact path={APP_ROUTES.USER_UPDATE_ADDRESS} Component={UpdateDeliveryAddress} />
            <PublicRoute exact path={APP_ROUTES.USER_MY_DELIVERIES} Component={MyDeliveries} />
            <PublicRoute exact path={APP_ROUTES.USER_HOMEPAGE} Component={Homepage} />
            <PublicRoute exact path={APP_ROUTES.PRODUCT_PAGE} Component={ProductPage} />
            <PublicRoute exact path={APP_ROUTES.BOOKS} Component={Books} />
            <PublicRoute exact path={APP_ROUTES.USER_VIEW_BY_CATEGORY} Component={ViewBookByCategory} />            
            <PublicRoute exact path={APP_ROUTES.USER_SEARCH_BOOKS} Component={SearchBooks} />



            {/**Admin side*/}
            <PublicRoute exact path={APP_ROUTES.ADMIN_VIEW_PRIVATE_POLICY} Component={ViewPrivatePolicy} />
            <PublicRoute exact path={APP_ROUTES.ADMIN_ADD_PRIVATE_POLICY} Component={AddPrivatePolicy} />
            <PublicRoute exact path={APP_ROUTES.ADMIN_UPDATE_PRIVATE_POLICY} Component={UpdatePrivatePolicy} />
            <PublicRoute exact path={APP_ROUTES.ADMIN_VIEW_TERMS_AND_CONDITIONS} Component={ViewTermsAndConditions} />
            <PublicRoute exact path={APP_ROUTES.ADMIN_ADD_TERMS_AND_CONDITIONS} Component={AddTermsAndConditions} />
            <PublicRoute exact path={APP_ROUTES.ADMIN_UPDATE_TERMS_AND_CONDITIONS} Component={UpdateTermsAndConditions} />
            <PublicRoute exact path={APP_ROUTES.ADMIN_ADD_ABOUT_US} Component={AddAboutUs} />
            <PublicRoute exact path={APP_ROUTES.ADMIN_VIEW_ABOUT_US} Component={ViewAboutUs}></PublicRoute>
            <PublicRoute exact path={APP_ROUTES.ADMIN_UPDATE_ABOUT_US} Component={UpdateAboutUs}></PublicRoute>
            <PublicRoute exact path={APP_ROUTES.ADMIN_ADD_TEAM_DETAILS} Component={AddTeamDetails}></PublicRoute>
            <PublicRoute exact path={APP_ROUTES.ADMIN_UPDATE_TEAM_DETAILS} Component={UpdateTeamDetails}></PublicRoute>
            <PublicRoute exact path={APP_ROUTES.ADMIN_VIEW_TEAM_DETAILS} Component={ViewTeamDetails}></PublicRoute>
            <PublicRoute exact path={APP_ROUTES.ADMIN_VIEW_DELIVERY} Component={ViewDelivery}></PublicRoute>
            <PublicRoute exact path={APP_ROUTES.ADMIN_UPDATE_DELIVERY} Component={UpdateDelivery}></PublicRoute>
            <PublicRoute exact path={APP_ROUTES.ADMIN_ADD_BOOK} Component={AddBook} />
            <PublicRoute exact path={APP_ROUTES.ADMIN_ADD_CATEGORY} Component={AddCategory} />             
            <PublicRoute exact path={APP_ROUTES.ADMIN_VIEW_BOOK} Component={ViewBook} />                
            <PublicRoute exact path={APP_ROUTES.ADMIN_VIEW_CATEGORY} Component={ViewCategory} />             
            <PublicRoute exact path={APP_ROUTES.ADMIN_UPDATE_BOOK} Component={UpdateBook} />            
            <PublicRoute exact path={APP_ROUTES.ADMIN_UPDATE_CATEGORY} Component={UpdateCategory} />
            <PublicRoute exact path={APP_ROUTES.ADMIN_PRODUCT_DASHBOARD} Component={ProductDashboard} />
            <PublicRoute exact path={APP_ROUTES.ADMIN_PAYMENT_DASHBOARD} Component={PaymentDashboard} />

        
        </Router>
    )
}

export default AppRoutes;