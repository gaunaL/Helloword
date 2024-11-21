import { useState, useEffect } from "react";

export const useCalculator = () => {
  const [sumCalory, setSumCalory] = useState(0);
  const [list, setList] = useState([]);

  const [formInsert, setFormInsert] = useState(false);

  const connectListFood = async (data) => {
    try {
      const user = {
        nome: data.name,
        caloria: Number(data.calory),
      };

      const res = await fetch(`http://localhost:4000/calculator`, {
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

  const getStateItemsBD = () =>
    JSON.parse(localStorage.getItem("dbfunc")) ?? [];

  const setItemsBD = (list) =>
    localStorage.setItem("dbfunc", JSON.stringify(list));

  // Inserir um item na lista
  const InsertItem = (data) => {
    setFormInsert(true);
    setList((prevList) => {
      const updatedList = [...prevList, data];
      setItemsBD(updatedList);
      return updatedList;
    });
    setFormInsert(false);
  };

  const removeItem = (index) => {
    const parseIndex = Number(index);
    setList((prevList) => {
      const updatedList = prevList.filter((_, i) => i !== parseIndex);
      setItemsBD(updatedList);
      return updatedList;
    });
  };

  const editItem = (data, index) => {
    setFormInsert(true);

    setList((prevList) => {
      const newList = [...prevList];
      newList[index] = { ...data };
      console.log(newList);
      return newList;
    });

    setFormInsert(false);
    console.log(index);
  };

  useEffect(() => {
    let sumKcal = 0;
    list.map((x) => {
      sumKcal += Number(x.calory);
    });

    setSumCalory(sumKcal);
    console.log(sumKcal);
  }, [list]);

  useEffect(() => {
    const db = localStorage.getItem("dbfunc");
    if (db && db.length !== 0) {
      setList(JSON.parse(db));
    }
  }, []);

  return {
    InsertItem,
    removeItem,
    editItem,
    connectListFood,
    formInsert,
    list,
    sumCalory,
  };
};
