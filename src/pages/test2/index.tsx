import { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';

type Person = { name: string; age: number; note: string; registerDate: string };

const Test100: NextPage = () => {
  const [personList, setPersonList] = useState<Person[]>([]);

  useEffect(() => {
    axios
      .get('https://umayadia-apisample.azurewebsites.net/api/persons')
      .then((res) => {
        console.log(res);
        setPersonList(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(personList);
  return (
    <div>
      {personList.map((elem, index) => (
        <div key={index} style={{ marginTop: '20px' }}>
          <div>名前:{elem.name}</div>
          <div>年齢:{elem.age}</div>
          <div>ノート:{elem.note}</div>
          <div>投稿日:{elem.registerDate}</div>
        </div>
      ))}
    </div>
  );
};

export default Test100;