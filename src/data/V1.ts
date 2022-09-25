import {
  BigintIsh,
  Pair,
  TokenAmount,
  Trade,
  WETH
} from 'fathomswap-sdk'

import { Version } from '../hooks/useToggledVersion'

export class MockV1Pair extends Pair {
  constructor(etherAmount: BigintIsh, tokenAmount: TokenAmount) {
    super(tokenAmount, new TokenAmount(WETH[tokenAmount.token.chainId], etherAmount))
  }
}

export function getTradeVersion(trade?: Trade): Version | undefined {
  return Version.v2
}

