import { Web3Provider } from '@into-the-fathom/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { NetworkConnector } from 'connectors/NetworkConnector'
import { XdcInjectedConnector } from 'connectors/xdc-connector';

const NETWORK_URL = process.env.REACT_APP_NETWORK_URL

const APOTHEM_RPC = 'https://apothem.xdcrpc.com'

export const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '50')

if (typeof NETWORK_URL === 'undefined') {
  throw new Error(`REACT_APP_NETWORK_URL must be a defined environment variable`)
}

export const network = new NetworkConnector({
  urls: { [NETWORK_CHAIN_ID]: NETWORK_URL }
})

let networkLibrary: Web3Provider|undefined

export function getNetworkLibrary(): Web3Provider {
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any))
}

const supportedChainIds = [50, 51]

export const injected = new InjectedConnector({
  supportedChainIds
})

export const injectedXdcPayV1 = new XdcInjectedConnector({
  supportedChainIds
})

// mainnet only
export const walletconnect = new WalletConnectConnector({
  rpc: {
    50: NETWORK_URL,
    51: APOTHEM_RPC
  },
  qrcode: true
})
