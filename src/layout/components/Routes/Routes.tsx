import { Fragment } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { ROUTE_LIST } from "./Routes.constants";
const Routes = () => {
  return (
    <Switch>
      {ROUTE_LIST.map((route) => (
        <Fragment key={route.key}>
          <Route {...route} />
        </Fragment>
      ))}
    </Switch>
  );
};

export default Routes;
