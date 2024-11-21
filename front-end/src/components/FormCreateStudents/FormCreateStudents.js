import { useState } from "react";
import { useFormStudents } from "../../hooks/useFormStudents";

import styles from "./FormCreateStudents.module.css";

const FormCreateStudents = ({ displayForm, setDisplayForm }) => {
  const [nameStudent, setNameStudent] = useState("");

  const { sendStudentsSQL } = useFormStudents();

  const handleForm = (e) => {
    e.preventDefault();

    const user = {
      nameStudent,
    };
    sendStudentsSQL(user);
    setNameStudent("");
    setDisplayForm(false);
  };

  const showForm = (e) => {
    e.preventDefault();
    setDisplayForm(true);
  };

  return (
    <div>
      {!displayForm && <button onClick={showForm}>Cadastrar alunos</button>}

      <div className={!displayForm ? styles.hide : styles.container_student}>
        <form onSubmit={handleForm}>
          <h1>Cadastrar alunos novos</h1>
          <label>
            nome:
            <input
              type="text"
              value={nameStudent}
              onChange={(e) => setNameStudent(e.target.value)}
              required
            />
          </label>
          <button>Cadastrar</button>
          <input type="reset" value="resetar" />
        </form>
      </div>
    </div>
  );
};

export default FormCreateStudents;
