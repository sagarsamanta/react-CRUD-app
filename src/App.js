import { BrowserRouter,Switch, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import DeleteUser from "./components/DeleteUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ViewUser from "./components/ViewUser";
import UserContext from "./UserContext/UserContext";
function App() {
  return (
    <div className="App">
      <UserContext>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/delete/:id" exact>
            <DeleteUser />
          </Route>
          <Route path="/View/:id" exact>
            <ViewUser />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUser />
          </Route>
          <Route path="/create" exact>
            <CreateUser />
          </Route>
          <Route >
            <NotFound />
          </Route>
          </Switch>
        </BrowserRouter>
      </UserContext>
    </div>
  );
}

export default App;
