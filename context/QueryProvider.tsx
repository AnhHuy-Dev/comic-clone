"use client";

import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
function QueryProvider({ children }: { children: ReactNode }) {
	const queryClient = new QueryClient();
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default QueryProvider;
