import { useContext, useState } from "react";
import { UserAccess } from "../context/UserAccess";
import { wait } from "@testing-library/user-event/dist/utils";

export const useFormStudents = () => {
  const url = "http://localhost:4000/";
  const { user } = useContext(UserAccess);

  const sendStudentsSQL = async (data) => {
    try {
      const user = {
        nameStudent: data.nameStudent,
      };

      const res = await fetch(`${url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  // const listStudent = async () => {
  //   const res = await fetch("http://localhost:4000/")
  //     .then((response) => {
  //       response.json();
  //     })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });

  //   return res;
  // };

  return {
    sendStudentsSQL,
    // listStudent,
  };
};
