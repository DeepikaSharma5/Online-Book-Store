import React from "react";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//import PrivateRoute from "./PrivateRoute";
import {Login} from "../pages";
import PublicRoute from "./PublicRoute";
import {APP_ROUTES} from "../utilities/constants/routes.constants";

const AppRoutes = () => {
    const history = createBrowserHistory();

    return(
        <Router history={history}>
            <PublicRoute exact path={APP_ROUTES.LOGIN} Component={Login} />
        </Router>
    )
}

export default AppRoutes;
