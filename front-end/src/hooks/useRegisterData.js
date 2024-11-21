import { useState } from "react";

export const useRegisterData = () => {
  const [userCredential, setUserCredential] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const createUser = async (data) => {
    setLoading(true);
    const user = {
      name: data.name,
      token: data.token,
      credential: data.credentials,
    };

    if (data.name === "") {
      setError("Crie um usuário para acesso ao site");
      return;
    }
    const res = await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log(typeof data);

    setUserCredential(user);
    console.log(user);
    setLoading(false);

    if (error != false) {
      setError(false);
      setLoading(false);
    }
  };
  const sendCredentials = async () => {};

  return {
    createUser,
    userCredential,
    sendCredentials,
    loading,
    error,
  };
};
