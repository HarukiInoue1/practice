import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import User from './user';

const queryClient = new QueryClient();

function Test5() {
  const [show, setShow] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: '2em' }}>
        <div>
          <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
        <h1>ユーザ情報</h1>
        {show && <User />}
      </div>
    </QueryClientProvider>
  );
}

export default Test5;