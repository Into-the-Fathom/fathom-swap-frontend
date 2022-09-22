import { Contract } from '@baldyash/contracts'
import { getAddress } from '@baldyash/address'
import { AddressZero } from '@baldyash/constants'
import { JsonRpcSigner, Web3Provider } from '@baldyash/providers'
import { BigNumber } from '@baldyash/bignumber'
// import { abi as IUniswapV2Router02ABI } from '@uniswap/v2-periphery/build/IUniswapV2Router02.json'
import { abi as IUniswapV2Router02ABI } from 'fathomswap-test-contracts/artifacts/contracts/periphery/interfaces/IUniswapV2Router02.sol/IUniswapV2Router02.json'

import { ROUTER_ADDRESS } from '../constants'
import { ChainId, Currency, CurrencyAmount, ETHER, JSBI, Percent, Token } from 'fathomswap-test-sdk'
import { TokenAddressMap } from '../state/lists/hooks'

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

const ETHERSCAN_PREFIXES: { [chainId in ChainId]: string } = {
  1: '',
  3: 'ropsten.',
  4: 'rinkeby.',
  5: 'goerli.',
  42: 'kovan.',
  50: 'xdc.',
  51: 'apothem.'
}

export const XDC_CHAIN_IDS = [50, 51]

export function getEtherscanLink(
  chainId: ChainId,
  data: string,
  type: 'transaction' | 'token' | 'address' | 'block' | 'transactions' | 'tokens' | 'blocks'
): string {
  let prefix = `https://${ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[1]}etherscan.io`

  if (XDC_CHAIN_IDS.includes(chainId)) {
    prefix = `https://${ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[1]}blocksscan.io`
  }

  if (XDC_CHAIN_IDS.includes(chainId)) {
    switch (type) {
      case 'transaction': {
        return `${prefix}/txs/${data}`
      }
      case 'token': {
        return `${prefix}/tokens/${data}`
      }
      case 'block': {
        return `${prefix}/blocks/${data}`
      }
      case 'address':
      default: {
        return `${prefix}/address/${data}`
      }
    }
  } else {
    switch (type) {
      case 'transaction': {
        return `${prefix}/tx/${data}`
      }
      case 'token': {
        return `${prefix}/token/${data}`
      }
      case 'block': {
        return `${prefix}/block/${data}`
      }
      case 'address':
      default: {
        return `${prefix}/address/${data}`
      }
    }
  }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address)
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}

// add 10%
export function calculateGasMargin(value: BigNumber): BigNumber {
  return value.mul(BigNumber.from(10000).add(BigNumber.from(1000))).div(BigNumber.from(10000))
}

// converts a basis points value to a sdk percent
export function basisPointsToPercent(num: number): Percent {
  return new Percent(JSBI.BigInt(num), JSBI.BigInt(10000))
}

export function calculateSlippageAmount(value: CurrencyAmount, slippage: number): [JSBI, JSBI] {
  if (slippage < 0 || slippage > 10000) {
    throw Error(`Unexpected slippage value: ${slippage}`)
  }
  return [
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 - slippage)), JSBI.BigInt(10000)),
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 + slippage)), JSBI.BigInt(10000))
  ]
}

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

// account is optional
export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account) as any)
}

// account is optional
export function getRouterContract(_: number, library: Web3Provider, account?: string): Contract {
  return getContract(ROUTER_ADDRESS, IUniswapV2Router02ABI, library, account)
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export function isTokenOnList(defaultTokens: TokenAddressMap, currency?: Currency): boolean {
  if (currency === ETHER) return true
  return Boolean(currency instanceof Token && defaultTokens[currency.chainId]?.[currency.address])
}
