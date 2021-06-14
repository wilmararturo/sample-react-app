import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route exact path={["/home", "/"]} component={Home} />
    </Router>
  );
}

export default App;
