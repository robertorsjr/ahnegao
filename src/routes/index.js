
import { Switch, Route, Redirect } from 'react-router-dom'
import { HomePage } from "../pages";

function Routes() {
  return (
    <Switch>
      <Redirect from={'/'} to={'/pages/1'} exact />
      <Route path="/pages/:page+" component={HomePage} exact />
    </Switch>
  );
}
export default Routes;