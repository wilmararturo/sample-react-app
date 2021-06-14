import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import StickyFooter from "./pages/StickyFooter";
import Dashboard from "./pages/dashboard/Dashboard";
import Album from "./pages/album/Album";
import Blog from "./pages/blog/Blog";
import Checkout from "./pages/checkout/Checkout";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path={["/home", "/"]} component={Home} />
      <Route exact path={["/stickyfooter"]} component={StickyFooter} />
      <Route exact path={["/dashboard"]} component={Dashboard} />
      <Route exact path={["/album"]} component={Album} />
      <Route exact path={["/blog"]} component={Blog} />
      <Route exact path={["/checkout"]} component={Checkout} />
    </Router>
  );
}

export default App;
