import { useState, useEffect, useContext } from "react";

import { UserAccess } from "../context/UserAccess";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [userSQL, setUserSQL] = useState("");
  const [error, setError] = useState("");

  const { user, setUser } = useContext(UserAccess);
  const url = `http://localhost:4000/login`;

  const loginAuth = async (data) => {
    setLoading(true);
    const user = {
      name: data.userAdmin,
      password: data.token,
    };

    try {
      setError("");
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          console.log(response);
          response.usuario && setUser({ ...response.usuario });
          response.failLogin && setError({ ...response.failLogin.message });
        })
        .catch((e) => {
          console.log(e.message);
        });
      if (res.ok) {
        const { token } = await res.json();
        localStorage.setItem("token", token);
      }
      setUserSQL(res);
    } catch (error) {
      console.log(error);
      setUserSQL("");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    loginAuth,
    userSQL,
    error,
    loading,
  };
};
