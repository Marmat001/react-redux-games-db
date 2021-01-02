import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Route path={["game/:id", "/"]} component={Home} />
      <GlobalStyles />
      <Home />
    </div>
  );
};

export default App;
