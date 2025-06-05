"use client";

// Since QueryClientProvider relies on useContext under the hood, we have to put 'use client' on top
import { isServer, QueryClient } from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // SSR을 사용하는 경우, 클라이언트에서 즉시 다시 가져오는 것을 방지하기 위해 staleTime을 0보다 높게 설정
        staleTime: 60 * 1000,
        experimental_prefetchInRender: true,
      },
    },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    // Server: 항상 새로운 queryClient를 생성해야 함.
    return makeQueryClient();
  } else {
    // Browser: 생성된 쿼리 클라이언트가 없을 경우 새로 생성
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}
