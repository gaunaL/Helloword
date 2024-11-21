import { useState, useEffect, useContext } from "react";
import { useLogin } from "../../hooks/useLogin";
import { UserAccess } from "../../context/UserAccess";

const Login = () => {
  const [userAdmin, setUserAdmin] = useState("");
  const [token, setToken] = useState("");

  const { loginAuth, userSQL, error, loading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      userAdmin,
      token,
    };

    loginAuth(user);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="name"
            value={userAdmin}
            required
            onChange={(e) => setUserAdmin(e.target.value)}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            name="token"
            autoComplete="off"
            value={token}
            required
            onChange={(e) => setToken(e.target.value)}
          />
        </label>

        {!loading && <button>Enviar</button>}
        {loading && <button disabled>carregando...</button>}
        {error && <p>Usuário ou senha inválido</p>}
      </form>
      {userSQL && <p>existo</p>}
    </>
  );
};

export default Login;
