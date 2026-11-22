# Architecture

Next.js App Router renders a client-side wallet page. Wagmi owns connection and account state; viem-backed HTTP transports read balances on Ethereum Mainnet and Base Sepolia; TanStack Query manages fetch lifecycle. `src/lib/wallet.mjs` contains pure address formatting and explorer URL helpers tested with Node test runner.

Threat model: wallet provider injection, unreliable RPC, phishing via external links, accidental transaction requests. No transaction APIs are exposed, and explorer links use fixed allowlisted hosts. Never store seed phrases or private keys.

Sprint 2: custom RPC configuration, token metadata, network switching, browser E2E tests, responsive polish, deployment.
