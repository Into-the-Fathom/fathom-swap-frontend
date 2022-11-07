import { ChainId } from 'into-the-fathom-swap-sdk'
import MULTICALL_ABI from 'constants/multicall/abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.XDC]: '0x0000000000000000000000000000000000000000',
  [ChainId.AXDC]: '0x09F50aE0776519a056349352F2A03Df1bDE393A7'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
