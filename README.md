# Web3 Wallet Explorer

Sprint 1 read-only wallet dashboard built with Next.js, wagmi, viem and TanStack Query.

## Run locally

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000 with an injected EVM wallet.

## Tests

```bash
npm test
npm run build
```

No GitHub Actions are included.

## Scope and security

- Supports Ethereum Mainnet and Base Sepolia for read-only native balances.
- No private keys, transfers, token approvals, or transaction signing.
- Public RPC defaults are rate-limited; a dedicated provider is recommended before production.
- Injected wallet required; no mobile QR connector in Sprint 1.
- Wallet interactions and production builds require additional browser smoke testing.

See `docs/architecture.md` for design.
