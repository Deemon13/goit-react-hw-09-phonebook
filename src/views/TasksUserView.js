import React, { Suspense } from "react";
import Spinner from "../components/libs-components/Loader";
import routes from "../routes";
import StyledViews from "./StyledViews";

export default function TaskUserViews() {
  return (
    <StyledViews.HomeContainer>
      <Suspense fallback={<Spinner />}>
        <StyledViews.HomeText>
          Sorry, but this feature will be available in future versions of the
          App. Now only the{" "}
          <StyledViews.RouteLink to={(routes.path = "/contacts")}>
            phonebook
          </StyledViews.RouteLink>{" "}
          !
        </StyledViews.HomeText>
      </Suspense>
    </StyledViews.HomeContainer>
  );
}
