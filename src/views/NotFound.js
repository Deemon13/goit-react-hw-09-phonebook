import React, { Suspense } from "react";
import Spinner from "../components/libs-components/Loader";
import routes from "../routes";
import StyledViews from "./StyledViews";

import imageNotFound from "../images/notFound.png";

function NotFound() {
  return (
    <StyledViews.NotFoundContainer>
      <Suspense fallback={<Spinner />}>
        <StyledViews.NotFoundImg
          src={imageNotFound}
          alt="cat detective"
          width="320"
        />
        <StyledViews.HomeText>
          Something went wrong. Let`s{" "}
          <StyledViews.RouteLink to={(routes.path = "/")}>
            go back
          </StyledViews.RouteLink>
          !
        </StyledViews.HomeText>
      </Suspense>
    </StyledViews.NotFoundContainer>
  );
}

export default NotFound;
