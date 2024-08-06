import axios from "axios";
import { useQuery } from "react-query";

const User = () => {
  const { data: users, isLoading } = useQuery("users", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  });

  if(isLoading){
    return <div>Now Loading...</div>
  }

  return (
    <>
      <h2>ユーザー一覧</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </>
  );
};

export default User;
