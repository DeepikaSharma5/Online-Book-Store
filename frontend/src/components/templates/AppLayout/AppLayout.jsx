import React, { useState } from "react";
import { APP_ROUTES } from "../../../utilities/constants/routes.constants";
import { AppLayoutHeader } from "../index";

const AppLayout = ({ children, componentTitle }) => {

  return (
    <React.Fragment>
              <div>
                <aside className="content">
                  <AppLayoutHeader/>
                  {children}
                </aside>
              </div>
    </React.Fragment>
  );
};

export default AppLayout;
