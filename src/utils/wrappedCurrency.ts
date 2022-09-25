import { ChainId, Currency, CurrencyAmount, ETHER, Token, TokenAmount, WETH, XDC } from 'into-the-fathom-swap-sdk'
import { XDC_CHAIN_IDS } from './index'

export function wrappedCurrency(currency: Currency | undefined, chainId: ChainId | undefined): Token | undefined {
  return chainId && (currency === ETHER || currency === XDC)
    ? WETH[chainId]
    : currency instanceof Token
    ? currency
    : undefined
}

export function wrappedCurrencyAmount(
  currencyAmount: CurrencyAmount | undefined,
  chainId: ChainId | undefined
): TokenAmount | undefined {
  const token = currencyAmount && chainId ? wrappedCurrency(currencyAmount.currency, chainId) : undefined
  return token && currencyAmount ? new TokenAmount(token, currencyAmount.raw) : undefined
}

export function unwrappedToken(token: Token, chainId?: ChainId): Currency {
  if (token.equals(WETH[token.chainId])) {
    if (chainId && XDC_CHAIN_IDS.includes(chainId)) {
      return XDC
    }
    return ETHER
  }
  return token
}
