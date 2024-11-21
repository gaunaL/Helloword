import { useState } from "react";

//css
import styles from "./Register.module.css";

//hook responsável por processar os dados da página
import { useRegisterData } from "../../hooks/useRegisterData";

const Register = () => {
  const { createUser, loading, error } = useRegisterData();

  /*
   *Hook do react para criação de variavel, que permite alterar um state em tempo de execução (dinamico)
   *
   */
  const [name, setName] = useState("");
  const [credentials, setCredentials] = useState("1");
  const [token, setToken] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerError, setRegisterError] = useState("");
  const [CPF, setCPF] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials === undefined) {
      alert("selecione um tipo de usuário");

      return;
    }
    if (token === confirmPassword) {
      const beginHuman = {
        name,
        token,
        CPF,
        credentials,
      };
      console.log(beginHuman);
      createUser(beginHuman);
    } else {
      setRegisterError("As senhas não conferem");
    }
  };
  return (
    <form className={styles.container_register} onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escreva seu nome..."
        />
      </label>
      <label>
        CPF:
        <input
          type="number"
          value={CPF}
          onChange={(e) => setCPF(e.target.value)}
          required
        />
      </label>
      <label>
        Cadastrar senha:
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </label>

      <label>
        Confirme a senha:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>
      <label>
        Tipo de usuário:&nbsp;
        <select
          value={credentials}
          onChange={(e) => setCredentials(e.target.value)}
        >
          <option value="1">Professor</option>
          <option value="2">Diretor</option>
        </select>
      </label>
      {registerError && <p>{registerError}</p>}

      {!loading && <button>enviar</button>}
      {loading && <button disabled> carregando....</button>}
    </form>
  );
};

export default Register;
