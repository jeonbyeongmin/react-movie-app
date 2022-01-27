import React, { Suspense, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CoinList from "./CoinList";

const queryClient = new QueryClient();

function App() {
  // const CoinList = React.lazy(() => import("./CoinList"));

  return (
    <QueryClientProvider client={queryClient}>
      <CoinList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
