
import { Home, Landing, Detail, Form } from "./views";
import { useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


function App() {

  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing}/>
      <Route exact path="/detail" component={Detail}/>
      <Route exact path="/create" component={Form}/>
      <Route path="/home" render={() => <Home/>}/>
      
    </div>
  );
}

export default App;
