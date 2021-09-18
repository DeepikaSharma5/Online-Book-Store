import React from "react";
import {Route} from "react-router-dom";
import jwt_decode from "jwt-decode";

import {Login} from "../pages";

const PrivateRoute = ({Component, path, allowed, ...rest}) => {

    const userToken = localStorage.getItem("user-token");

    if (userToken != null) {
      const decodedToken = jwt_decode(userToken, { complete: true });

      if(allowed.includes(decodedToken.role)){
        return(
            <Route
                {...rest}
                 path={path}
                render={(props) => {
                    return <Component {...props} />;
                }}
            />
        )
      }else{
          // Not allowed
          return(
            <Route
                {...rest}
                 path={path}
                render={(props) => {
                    return <Login />;
                }}
            />
        )
      }
    }else{
        // Not allowed
        return(
            <Route
                {...rest}
                 path={path}
                render={(props) => {
                    return <Login />;
                }}
            />
        )
    }
}

export default PrivateRoute;
