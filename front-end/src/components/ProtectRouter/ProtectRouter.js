import { useContext } from "react";
import { UserAccess } from "../../context/UserAccess";

const ProtectRouter = ({ component: Component, redirectTo: RedirectTo }) => {
  const { user } = useContext(UserAccess);

  if (!user) {
    return <Component />;
  } else {
    return <RedirectTo />;
  }
};

export default ProtectRouter;
