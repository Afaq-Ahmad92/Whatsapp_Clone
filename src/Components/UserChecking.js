import React, { useContext } from "react";
import { ContextProvider } from "../Context/Context";
import Body from "./Body";
import UserRAuthentication from "./UserRAuthentication";
const UserChecking = () => {
  const { user } = useContext(ContextProvider);
  return user ? <Body /> : <UserRAuthentication />;
};

export default UserChecking;
