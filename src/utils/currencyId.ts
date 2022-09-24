import { Currency, ETHER, Token, XDC } from 'into-the-fathom-swap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'ETH'
  if (currency === XDC) return 'XDC'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
