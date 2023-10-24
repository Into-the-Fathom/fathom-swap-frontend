# Fathom DEX Interface

An open source interface for Fathom DEX - a protocol for decentralized exchange on XDC network.

- Website: [fathom.fi](https://fathom.fi/)
- Interface: [swap.fathom.fi](https://swap.fathom.fi/)
- Docs: [gist.github.com/BaldyAsh/3676a18b003758057f634c9af2cfe49a](https://gist.github.com/BaldyAsh/3676a18b003758057f634c9af2cfe49a)
- Twitter: [@Fathom_fi](https://twitter.com/Fathom_fi)
- Email: [anton@fathom.fi](mailto:anton@fathom.fi)
- Whitepaper: [Link](https://gist.github.com/BaldyAsh/3676a18b003758057f634c9af2cfe49a)

## Accessing the Fathom DEX Interface

To access the Fathom DEX Interface visit [swap.fathom.fi](https://swap.fathom.fi/).

## Listing a token

Please see the
[fathom-swap-standard-token-list](https://github.com/Into-the-Fathom/fathom-swap-default-token-list) 
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
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"` (50 for XDC, 51 for Apothem)
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://erpc.xdcrpc.com"` [XDC RPC list](https://chainlist.org/chain/50),  [Apothem RPC list](https://chainlist.org/chain/51) 


## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

