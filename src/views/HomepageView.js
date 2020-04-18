import React, { Suspense } from "react";
import Spinner from "../components/libs-components/Loader";
import routes from "../routes";
import StyledViews from "./StyledViews";

export default function HomepageView() {
  return (
    <StyledViews.HomeContainer>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </StyledViews.HomeContainer>
  );
}
