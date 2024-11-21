import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import ButtonLetters from "../ButtonLetters/ButtonLetters";
import { UserAccess } from "../../context/UserAccess";
import { useContext } from "react";

const Navbar = () => {
  const { user } = useContext(UserAccess);

  return (
    <nav className={styles.nav}>
      <div className={styles.brand_container}>
        <h1>
          <span>C</span>
          alo &nbsp;
          <span className={styles.brand_secound}>K</span>
          ids&nbsp;&nbsp;
          <div></div>
        </h1>
      </div>

      {user && (
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/calculator">Calculadora</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      )}
      {!user && (
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/register">Registrar</NavLink>
          </li>

          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      )}

      <ButtonLetters />
      {console.log(user)}
    </nav>
  );
};

export default Navbar;
