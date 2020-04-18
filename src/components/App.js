import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import Layout from "./Layout";
import Spinner from "./libs-components/Loader";
import routes from "../routes";
import NotFound from "../views/NotFound";

export default function App() {
  return (
    <ThemeContext>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Switch>
              {routes.map((route) => (
                <Route key={route.path} {...route} />
              ))}
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </ThemeContext>
  );
}
