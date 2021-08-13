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

import {Login} from "../pages";

const AppRoutes = () => {
    const history = createBrowserHistory();

    return(
        <Router history={history}>

            {/**Customer side*/}
            <PublicRoute exact path={APP_ROUTES.LOGIN} Component={Login} />
            <PublicRoute exact path={APP_ROUTES.USER_CONTACT_US} Component={ContactUs} />
            <PublicRoute exact path={APP_ROUTES.USER_PRIVATE_POLICY} Component={PrivatePolicy} />

            {/**Admin side*/}
            <PublicRoute exact path={APP_ROUTES.ADMIN_VIEW_PRIVATE_POLICY} Component={ViewPrivatePolicy} />
            <PublicRoute exact path={APP_ROUTES.ADMIN_ADD_PRIVATE_POLICY} Component={AddPrivatePolicy} />
            <PublicRoute exact path={APP_ROUTES.ADMIN_UPDATE_PRIVATE_POLICY} Component={UpdatePrivatePolicy} />
        </Router>
    )
}

export default AppRoutes;
