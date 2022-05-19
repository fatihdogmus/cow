import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DispatchType, UserActions } from "@cow/front-end/store";
import { AuthenticationService } from "@cow/front-end/authentication";

function InitialLoadComponent(): JSX.Element {
  const dispatch = useDispatch<DispatchType>();
  const authenticationService = new AuthenticationService();
  const getLoggedInUser = async () => {
    const user = await authenticationService.getLoggedInUser();
    if (user) {
      dispatch(UserActions.login(user));
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return <></>;
}

export default InitialLoadComponent;
