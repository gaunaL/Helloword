import { useContext, useEffect, useState } from "react";
import { UserAccess } from "../context/UserAccess";

export const useProfile = () => {
  const { user, setUser } = useContext(UserAccess);

  const logout = () => {
    
    localStorage.removeItem("token");
    setUser(false);
  };

  return {
    logout,
  };
};
