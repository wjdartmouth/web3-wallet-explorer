"use client";
import { useAccount, useBalance, useChainId, useConnect, useDisconnect } from "wagmi";
import { baseSepolia, mainnet } from "wagmi/chains";
import { explorerAddressUrl, shortenAddress } from "../lib/wallet.mjs";
export default function Home() {
 const { address, isConnected, status } = useAccount();
 const chainId = useChainId();
 const { connect, connectors, error: connectError, isPending } = useConnect();
 const { disconnect } = useDisconnect();
 const { data: balance, isLoading, error: balanceError, refetch } = useBalance({ address, query: { enabled: Boolean(address) } });
 const supported = chainId === baseSepolia.id || chainId === mainnet.id;
 return <main><header><span className="eyebrow">WEB3 DEV PORTFOLIO / 01</span><h1>Wallet Explorer</h1><p>A read-only EVM dashboard. No transactions or custody.</p></header><section className="panel" aria-live="polite">
 {!isConnected ? <><h2>Connect a wallet</h2><p>Use a browser wallet such as MetaMask. Only public wallet data is read.</p>{connectors.map(c => <button key={c.uid} disabled={isPending} onClick={() => connect({ connector: c })}>Connect {c.name}</button>)}{connectors.length === 0 && <p>No injected wallet detected. Install or enable a compatible browser wallet.</p>}</> : <><div className="split"><h2>Connected wallet</h2><button className="secondary" onClick={() => disconnect()}>Disconnect</button></div><dl><dt>Address</dt><dd title={address}>{shortenAddress(address ?? "")}</dd><dt>Network</dt><dd>{chainId === baseSepolia.id ? "Base Sepolia" : chainId === mainnet.id ? "Ethereum Mainnet" : `Unsupported network (${chainId})`}</dd><dt>Native balance</dt><dd>{isLoading ? "Loading…" : balanceError ? "Unavailable" : balance ? `${Number(balance.formatted).toLocaleString(undefined, { maximumFractionDigits: 6 })} ${balance.symbol}` : "No balance returned"}</dd></dl>{address && supported && <a href={explorerAddressUrl(chainId,address)} target="_blank" rel="noopener noreferrer">View address in block explorer ↗</a>}{!supported && <p role="alert">Switch your wallet to Base Sepolia or Ethereum Mainnet to view supported data.</p>}{balanceError && <div role="alert"><p>RPC request failed. Check your connection and try again.</p><button onClick={() => void refetch()}>Retry</button></div>}</>}
 {connectError && <p role="alert">Wallet connection failed: {connectError.message}</p>}{status === "reconnecting" && <p>Reconnecting…</p>}</section><footer>Demo only · Never share seed phrases · No financial advice</footer></main>;
}
