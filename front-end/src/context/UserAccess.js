import { createContext, useContext, useState } from "react";

const UserAccess = createContext();

const UserAccessProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  return (
    <UserAccess.Provider value={{ user, setUser }}>
      {children}
    </UserAccess.Provider>
  );
};

export { UserAccess, UserAccessProvider };
