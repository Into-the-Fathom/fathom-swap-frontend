import { ChainId, JSBI, Percent, Token, WETH } from 'fathomswap-sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { injected, walletconnect } from 'connectors'

// a list of tokens by chain
type RouterAddressesList = {
  readonly [chainId in ChainId]: string
}

// APOTHEM -- 0xc68f7E9CBc881F362065235D2a373B5B96644351
export const ROUTER_ADDRESSES: RouterAddressesList = {
  // @todo: Need to change it after deploy to XDC
  [ChainId.XDC]: '0xd10287b6036942B95AECfD8F94A6F07724CBE428',
  [ChainId.AXDC]: '0xd10287b6036942B95AECfD8F94A6F07724CBE428'
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

// Block time here is slightly higher (~1s) than average in order to avoid ongoing proposals past the displayed time
export const AVERAGE_BLOCK_TIME_IN_SECS = 13
export const PROPOSAL_LENGTH_IN_BLOCKS = 40_320

export const GOVERNANCE_ADDRESS = '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'

export const TIMELOCK_ADDRESS = '0x1a9C8182C09F50C8318d769245beA52c32BE35BC'

/***
 * Apothem tokens
 */
export const US_PLUS_AXDC = new Token(ChainId.AXDC, '0x82b4334f5cd8385f55969bae0a863a0c6ea9f63f', 18, 'US+', 'US+')
export const FXD_AXDC = new Token(ChainId.AXDC, '0x322742814990bf0b075fc2b33186ca63122ffb08', 18, 'FXD', 'FXD')
export const FTHM_AXDC = new Token(ChainId.AXDC, '0x9624167f18d3989304f793f40266ae0b005e663f', 18, 'FTHM', 'Fathom')
export const WXDC_AXDC = new Token(
  ChainId.AXDC,
  '0xe99500ab4a413164da49af83b9824749059b46ce',
  18,
  'WXDC',
  'Wrapped XDC'
)

/**
 * XDC Mainnet Tokens
 */
const FTHM_ADDRESS_XDC = '0x9624167f18d3989304F793f40266ae0B005e663F'

export const FTHM_XDC = new Token(ChainId.XDC, FTHM_ADDRESS_XDC, 18, 'FTHM', 'Fathom')

export const FTHM: { [chainId in ChainId]: Token } = {
  [ChainId.XDC]: FTHM_XDC,
  [ChainId.AXDC]: FTHM_AXDC
}

export const COMMON_CONTRACT_NAMES: { [address: string]: string } = {
  [FTHM_ADDRESS_XDC]: 'FTHM',
  [GOVERNANCE_ADDRESS]: 'Governance',
  [TIMELOCK_ADDRESS]: 'Timelock'
}

const WETH_ONLY: ChainTokenList = {
  [ChainId.XDC]: [WETH[ChainId.XDC]],
  [ChainId.AXDC]: [WETH[ChainId.AXDC]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY
}

export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.AXDC]: [
    [US_PLUS_AXDC, FTHM_AXDC],
    [FXD_AXDC, FTHM_AXDC],
    [FXD_AXDC, US_PLUS_AXDC],
    [WXDC_AXDC, FTHM_AXDC],
    [FXD_AXDC, WXDC_AXDC],
    [WXDC_AXDC, US_PLUS_AXDC]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

// used for rewards deadlines
export const BIG_INT_SECONDS_IN_WEEK = JSBI.BigInt(60 * 60 * 24 * 7)

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_XDC: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 XDC
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), JSBI.BigInt(10000))

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
  '0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C'
]
