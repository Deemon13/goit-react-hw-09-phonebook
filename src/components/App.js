import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ThemeContext from '../context/ThemeContext';
import Layout from './Layout';
import Spinner from './Loader/_Loader';
import PublicRoute from './Routers/_PublicRoute';
import PrivateRoute from './Routers/_PrivateRoute';
import routes from '../routes';
import NotFound from '../views/NotFound/NotFound';
import { authOperations } from '../redux/auth';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <ThemeContext>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Switch>
                {routes.map(route =>
                  route.private ? (
                    <PrivateRoute key={route.label} {...route} />
                  ) : (
                    <PublicRoute key={route.label} {...route} />
                  ),
                )}
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </ThemeContext>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
