import type { ReactNode } from "react";
import { Providers } from "./providers";
import "./style.css";
export const metadata = { title: "Web3 Wallet Explorer", description: "Read-only EVM wallet dashboard" };
export default function RootLayout({ children }: { children: ReactNode }) { return <html lang="en"><body><Providers>{children}</Providers></body></html>; }
