import { QueryClient } from "react-query";

export const quelyClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // フェッチ失敗時のリトライ回数
      refetchOnWindowFocus: false, // ウィンドウがフォーカスされたときにリフェッチしない
      staleTime: 1000 * 60 * 5, // データが古くなるまでの時間（5分）
      cacheTime: 1000 * 60 * 10, // キャッシュが保存される時間（10分）
    },
    mutations: {
      retry: 3, // ミューテーション失敗時のリトライ回数
    },
  }
});