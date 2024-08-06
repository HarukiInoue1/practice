import { quelyClient } from "@/config/reactQuery";
import { GlobalContextProvider } from "@/hooks/GlobalContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={quelyClient}>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </QueryClientProvider>
  );
}
