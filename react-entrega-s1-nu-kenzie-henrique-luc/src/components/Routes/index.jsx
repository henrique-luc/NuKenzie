import LandingPage from "../Pages/LandingPage";
import UserList from "../Pages/UserList";

import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Switch>
      <Route exact path={"/"}>
        <LandingPage />
      </Route>
      <Route exact path={"/nu-kenzie"}>
        <UserList />
      </Route>
    </Switch>
  );
}
