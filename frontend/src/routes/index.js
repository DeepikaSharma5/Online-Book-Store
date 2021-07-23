import React from "react";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {APP_ROUTES} from "../utilities/constants/routes.constants";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute"

// const AppRoutes = () => {

    // const history = createBrowserHistory();

//     return(
//         <Router history={history}>
//             <PublicRoute exact path={APP_ROUTES.LOGIN} Component={} />
//             <PublicRoute exact path={APP_ROUTES.SIGNUP} Component={} />
//             <PrivateRoute exact path={APP_ROUTES.USER_PERSONAL_DETAILS} Component={} />
//             <PrivateRoute exact path={APP_ROUTES.USER_WISHLIST} Component={} />
//         </Router>
//     )
// }

export default AppRoutes;
