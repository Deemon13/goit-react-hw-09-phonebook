import React, { Suspense } from "react";
import { connect } from "react-redux";
import Spinner from "../components/libs-components/Loader";
import routes from "../routes";
import StyledViews from "./StyledViews";
import { authSelectors } from "../redux/auth";

function HomepageView({ isAuthenticated }) {
  return (
    <StyledViews.HomeContainer>
      <Suspense fallback={<Spinner />}>
        {isAuthenticated ? (
          <StyledViews.HomeText>
            Hi! Registration in this App will allow you to add contacts to the{" "}
            <StyledViews.RouteLink to={(routes.path = "/contacts")}>
              phonebook
            </StyledViews.RouteLink>{" "}
            , use notes to plan and write tasks.
          </StyledViews.HomeText>
        ) : (
          <StyledViews.HomeText>
            Hi! Registration in this App will allow you to add contacts to the
            phone book, use notes to plan and write tasks. For all this you need
            to{" "}
            <StyledViews.RouteLink to={(routes.path = "/register")}>
              sign up
            </StyledViews.RouteLink>{" "}
            or{" "}
            <StyledViews.RouteLink to={(routes.path = "/login")}>
              sign in
            </StyledViews.RouteLink>
            .
          </StyledViews.HomeText>
        )}
      </Suspense>
    </StyledViews.HomeContainer>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(HomepageView);
