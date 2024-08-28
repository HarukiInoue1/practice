import { useQuery } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

type User= {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
};

function User() {
  const { data, isLoading, isError, error, status } = useQuery<User[], Error>(
    "users",
    fetchUsers,
    {
      refetchOnWindowFocus: false,
      // キャッシュタイムを5秒に設定
      cacheTime: 5000,
      // 自動リフェッチを60秒ごとに設定
      refetchInterval: 1000 * 60,
    }
  );
  
  console.log(status);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        {data?.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default User;
