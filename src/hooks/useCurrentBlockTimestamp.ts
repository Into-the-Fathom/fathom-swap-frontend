import { BigNumber } from 'fathom-ethers'
import { useSingleCallResult } from 'state/multicall/hooks'
import { useMulticallContract } from 'hooks/useContract'

// gets the current timestamp from the blockchain
export default function useCurrentBlockTimestamp(): BigNumber | undefined {
  const multicall = useMulticallContract()
  return useSingleCallResult(multicall, 'getCurrentBlockTimestamp')?.result?.[0]
}
