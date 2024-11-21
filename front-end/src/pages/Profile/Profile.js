import { useContext, useState } from "react";
import { useProfile } from "../../hooks/useProfile";
import { UserAccess } from "../../context/UserAccess";
import FormCreateStudents from "../../components/FormCreateStudents/FormCreateStudents";

import styles from "./Profile.module.css";

import Student from "../../components/StudentList/Student";

const Profile = () => {
  const { logout } = useProfile();
  const { user } = useContext(UserAccess);

  const [image, setImage] = useState("");
  const [displayForm, setDisplayForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Upload image");
  };

  const logoutBtn = (e) => {
    logout();
  };

  return (
    <div className={styles.profile_container}>
      {user && <h3>{user.name}</h3>}
      {/* <form>
        <label>Imagem:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">salvar</button>
      </form> */}

      <Student />
      <FormCreateStudents
        displayForm={displayForm}
        setDisplayForm={setDisplayForm}
      />

      <p>Nenhuma escola, turma e nutricionista selecionados.</p>
      <button onClick={logoutBtn}>logout</button>
    </div>
  );
};

export default Profile;
