import axios from "axios";
import { useEffect, useState } from "react";

type Person = { name: string; age: number; note: string; registerDate: string };

export const usePersonList = () => {
  const [personList, setPersonList] = useState<Person[]>([]);

  useEffect(() => {
    axios
      .get("https://umayadia-apisample.azurewebsites.net/api/persons")
      .then((res) => {
        console.log(res);
        setPersonList(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return { personList };
};
