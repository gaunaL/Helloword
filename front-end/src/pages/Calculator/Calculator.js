import styles from "./Calculator.module.css";
import { useState } from "react";

//hook
import { useCalculator } from "../../hooks/useCalculator";

const Calculator = () => {
  const [name, setName] = useState("");
  const [calory, setCalory] = useState("");
  const [toggleInsertForm, setToggleInsertForm] = useState(null);

  const [isActive, setIsActive] = useState(false);

  const {
    InsertItem,
    removeItem,
    editItem,
    connectListFood,
    formInsert,
    list,
    sumCalory,
  } = useCalculator();

  const testeInser = "tomatoma";

  const handleDataForm = (e) => {
    e.preventDefault();

    const item = {
      name,
      calory,
    };

    // evento do form
    console.log(toggleInsertForm);

    if (typeof toggleInsertForm === "number") {
      alert(`Item editado: ${toggleInsertForm} nome: ${name} calory:${calory}`);
      editItem(item, toggleInsertForm);
      setCalory("");
      setName("");
    }
    if (toggleInsertForm === "incluir") {
      InsertItem(item);
      connectListFood(item);
      setCalory("");
      setName("");
    }

    setIsActive(false);
  };

  const handleEditElement = (e) => {
    e.preventDefault();
    setToggleInsertForm(Number(e.target.value));
    setIsActive(true);
  };

  const handleVisibleInsert = (e) => {
    e.preventDefault();

    setToggleInsertForm(e.target.getAttribute("name"));
    setIsActive(true);
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.container}>
        {/**class="container" */}
        <div className={styles.header}>
          {/**class="header" */}
          <span>Cadastro de Calorias</span>
          <button onClick={handleVisibleInsert} name="incluir">
            incluir {/**</i>*/}
          </button>
          {/** onclick="openModal()" id="new" */}
        </div>

        <div className={styles.divTable}>
          {/**class="divTable" */}
          <table>
            <thead>
              <tr>
                <th>Alimento</th>
                <th>Calorias</th>
                <th className={styles.acao}>Editar</th>
                {/**class="acao" */}
                <th className={styles.acao}>Excluir</th>
                {/**class="acao" */}
              </tr>
            </thead>

            <tbody>
              {!list && (
                <tr>
                  <td>lista vazia</td>
                </tr>
              )}

              {list &&
                list.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.calory} kcal</td>
                    <td>
                      <button onClick={handleEditElement} value={index}>
                        Editar
                      </button>{" "}
                      {/**<i class='bx bx-edit'></i> */}
                    </td>
                    <td>
                      <button onClick={(e) => removeItem(index)}></button>
                      {/**<i class='bx bx-trash'></i> */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/**default hidden */}
        <div
          className={`${styles.modal_container} ${
            isActive ? styles.active : ""
          }`}
        >
          {/**class="modal-container" */}
          <div className={styles.modal}>
            {" "}
            {/**class="modal" */}
            <form onSubmit={handleDataForm}>
              <label>Alimento</label>
              {/**for="m-nome" */}
              <input
                name="insertName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
              />
              {/**id="m-nome"  */}
              <label>Calorias</label>
              {/**for="m-calorias" */}
              <input
                name="insertCalory"
                value={calory}
                onChange={(e) => setCalory(e.target.value)}
                type="number"
                required
              />
              {/**id="m-calorias" inputMode="numeric" */}
              <button>Salvar</button> {/** id="btnSalvar" */}
            </form>
          </div>
        </div>

        <span id="totalCalories">Total de Calorias: {sumCalory} kcal</span>
      </div>

      <button id="contrastToggle">
        {/** style="position: fixed; top: 10px; right: 10px; z-index: 1000;" */}
        Alternar Alto Contraste
      </button>
    </div>
  );
};

export default Calculator;
