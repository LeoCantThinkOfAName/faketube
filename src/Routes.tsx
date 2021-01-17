import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from "./components/Layout";
import { FavoritePage } from "./pages/Favorite";
import { IndexPage } from "./pages/Index";
import { WatchPage } from "./pages/Watch";

export interface RouteParams {
  id: string;
  page: string;
}

export const Routes: React.FC = ({}): JSX.Element => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/favorite">
            <FavoritePage />
          </Route>
          <Route path="/watch/:id">
            <WatchPage />
          </Route>
          <Route path="/search/:page">
            <IndexPage />
          </Route>
          <Route path="/:page">
            <IndexPage />
          </Route>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};
