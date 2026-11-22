"use client";
import { WagmiProvider, createConfig, http } from "wagmi";
import { baseSepolia, mainnet } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
const config = createConfig({ chains: [baseSepolia, mainnet], connectors: [injected()], transports: { [baseSepolia.id]: http(), [mainnet.id]: http() }, ssr: true });
export function Providers({children}:{children:ReactNode}) { const [client] = useState(() => new QueryClient()); return <WagmiProvider config={config}><QueryClientProvider client={client}>{children}</QueryClientProvider></WagmiProvider>; }
