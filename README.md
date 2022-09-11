# FathomSwap Interface

This project is currently clone of [Uniswap Interface v3.2.20](https://github.com/Uniswap/interface/tree/v3.2.20).

[![Unit Tests](https://github.com/FathomSwap/fathomswap-interface/actions/workflows/unit-tests.yaml/badge.svg)](https://github.com/FathomSwap/fathomswap-interface/actions/workflows/unit-tests.yaml)
[![Integration Tests](https://github.com/FathomSwap/fathomswap-interface/actions/workflows/integration-tests.yaml/badge.svg)](https://github.com/FathomSwap/fathomswap-interface/actions/workflows/integration-tests.yaml)
[![Lint](https://github.com/FathomSwap/fathomswap-interface/actions/workflows/lint.yml/badge.svg)](https://github.com/FathomSwap/fathomswap-interface/actions/workflows/lint.yml)
[![Release](https://github.com/FathomSwap/fathomswap-interface/actions/workflows/release.yaml/badge.svg)](https://github.com/FathomSwap/fathomswap-interface/actions/workflows/release.yaml)

An open source interface for FathomSwap -- a protocol for decentralized exchange of Ethereum tokens.

- Website: [fathomswap.org](https://fathomswap.org/)
- Interface: [app.fathomswap.org](https://app.fathomswap.org)
- Docs: [fathomswap.org/docs/](https://fathomswap.org/docs/)
- Twitter: [@FathomSwapProtocol](https://twitter.com/FathomSwapProtocol)
- Reddit: [/r/FathomSwap](https://www.reddit.com/r/FathomSwap/)
- Email: [contact@fathomswap.org](mailto:contact@fathomswap.org)
- Discord: [FathomSwap](https://discord.gg/FCfyBSbCU5)
- Whitepaper: [Link](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig)

## Accessing the FathomSwap Interface

To access the FathomSwap Interface, use an IPFS gateway link from the
[latest release](https://github.com/FathomSwap/fathomswap-interface/releases/latest), 
or visit [app.fathomswap.org](https://app.fathomswap.org).

## Listing a token

Please see the
[@fathomswap/default-token-list](https://github.com/fathomswap/default-token-list) 
repository.

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

Note that the interface only works on testnets where both 
[FathomSwap V2](https://fathomswap.org/docs/v2/smart-contracts/factory/) and 
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `main` branch.** 
CI checks will run against all PRs.

## Accessing FathomSwap Interface V1

The FathomSwap Interface supports swapping against, and migrating or removing liquidity from FathomSwap V1. However,
if you would like to use FathomSwap V1, the FathomSwap V1 interface for mainnet and testnets is accessible via IPFS gateways 
linked from the [v1.0.0 release](https://github.com/FathomSwap/fathomswap-interface/releases/tag/v1.0.0).
