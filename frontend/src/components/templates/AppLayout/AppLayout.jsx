import React, { useState } from "react";
import { APP_ROUTES } from "../../../utilities/constants/routes.constants";
import { AppLayoutHeader } from "../index";
import Footer from "../../Customer/Homepage/Footer/Footer";

const AppLayout = ({ children, componentTitle }) => {
  return (
    <div style={{ marginTop: "60px" }}>
      <AppLayoutHeader />
      <div style={{ marginTop: "60px" }}>{children}</div>
      <div style={{ width: "99%" }} >
      <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
