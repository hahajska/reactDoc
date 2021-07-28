import { lazy, Suspense } from "react";

import * as ROUTES from "./constants/routes";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.scss";
import Header from "./components/header";
import Loading from "./components/loading";

const Work = lazy(() => import("./pages/work"));
const Showcase = lazy(() => import("./pages/showcase"));
const Home = lazy(() => import("./pages/home"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={Loading}>
        <Header />

        <Switch>
          <Route path={ROUTES.HOME} exact component={Home} />
          <Route path={ROUTES.WORK} component={Work} />
          <Route path={ROUTES.SHOWCASE} component={Showcase} />
        </Switch>
      </Suspense>
    </Router>
  );
}
