import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";

import ContactUs from "./Components/Customer/ContactUs/contactUs";

function App() {
  return (
    <Router>

      {/**Customer side*/}
      <Route component={ContactUs} path='/contact-us'></Route>
    
      {/**Admin side*/}

    </Router>
  );
}

export default App;
