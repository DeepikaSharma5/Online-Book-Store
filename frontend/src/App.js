import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

import ContactUs from "./Components/Customer/ContactUs/contactUs";
import PrivatePolicy from "./Components/Customer/PrivatePolicy/PrivatePolicy";
import ViewPrivatePolicy from "./Components/Admin/Contents/PrivatePolicy/ViewPrivatePolicy/ViewPrivatePolicy";
import AddPrivatePolicy from "./Components/Admin/Contents/PrivatePolicy/AddPrivatePolicy/AddPrivatePolicy";

function App() {
  return (
    <Router>

      {/**Customer side*/}
      <Route component={ContactUs} path='/contact-us'></Route>
      <Route component={PrivatePolicy} path='/private-policy'></Route>
    
      {/**Admin side*/}
      <Route component={ViewPrivatePolicy} path='/admin-view-private-policy'></Route>
      <Route component={AddPrivatePolicy} path='/admin-add-private-policy'></Route>

    </Router>
  );
}

export default App;
