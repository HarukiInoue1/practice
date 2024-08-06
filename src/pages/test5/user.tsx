
import { useQuery } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';


export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function User() {
  const { data, isLoading, isError, error, status } = useQuery(
    "users",
    fetchUsers,
    {
      refetchOnWindowFocus: false,
      // キャッシュタイムを１秒に　＝　１秒間だけキャッシュのデータを利用可能
      cacheTime: 5000,
      // 自動リフェッチ
      refetchInterval:1000*60,
    }
  );
  console.log(status);


  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        {data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />

    </div>
  );
}

export default User;
