import { quelyClient } from "@/config/reactQuery";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";

// クエリークライアントで管理

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={quelyClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
