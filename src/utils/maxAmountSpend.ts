import { CurrencyAmount, XDC, JSBI } from 'fathomswap-sdk'
import { MIN_XDC } from 'constants/index'

/**
 * Given some token amount, return the max that can be spent of it
 * @param currencyAmount to return max of
 */
export function maxAmountSpend(currencyAmount?: CurrencyAmount): CurrencyAmount | undefined {
  if (!currencyAmount) return undefined
  if (currencyAmount.currency === XDC) {
    if (JSBI.greaterThan(currencyAmount.raw, MIN_XDC)) {
      return CurrencyAmount.xdc(JSBI.subtract(currencyAmount.raw, MIN_XDC))
    } else {
      return CurrencyAmount.xdc(JSBI.BigInt(0))
    }
  }
  return currencyAmount
}
