import { ChainId, TokenAmount } from 'fathomswap-test-sdk'
import React, { useMemo } from 'react'
import { X } from 'react-feather'
import styled from 'styled-components'
import tokenLogo from '../../assets/images/token-logo.svg'
import { UNI } from '../../constants'
import { useTotalSupply } from '../../data/TotalSupply'
import { useActiveWeb3React } from '../../hooks'
import { useMerkleDistributorContract } from '../../hooks/useContract'
import useCurrentBlockTimestamp from '../../hooks/useCurrentBlockTimestamp'
// import { useTotalUniEarned } from '../../state/stake/hooks'
import { useAggregateUniBalance, useTokenBalance } from '../../state/wallet/hooks'
import { ExternalLink, /*StyledInternalLink,*/ TYPE, UniTokenAnimated } from '../../theme'
import { computeUniCirculation } from '../../utils/computeUniCirculation'
import useUSDCPrice from '../../utils/useUSDCPrice'
import { AutoColumn } from '../Column'
import { RowBetween } from '../Row'
import { Break, CardBGImage, CardNoise, CardSection, DataCard } from '../earn/styled'

const ContentWrapper = styled(AutoColumn)`
  width: 100%;
`

const ModalUpper = styled(DataCard)`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.bg7};
  color: ${({ theme }) => theme.text6};
  padding: 0.5rem;
`

const StyledClose = styled(X)`
  position: absolute;
  right: 16px;
  top: 16px;

  :hover {
    cursor: pointer;
  }
`

/**
 * Content for balance stats modal
 */
export default function UniBalanceContent({ setShowUniBalanceModal }: { setShowUniBalanceModal: any }) {
  const { account, chainId } = useActiveWeb3React()
  const uni = chainId ? UNI[chainId] : undefined

  const total = useAggregateUniBalance()
  const uniBalance: TokenAmount | undefined = useTokenBalance(account ?? undefined, uni)
  // const uniToClaim: TokenAmount | undefined = useTotalUniEarned()

  const totalSupply: TokenAmount | undefined = useTotalSupply(uni)
  const uniPrice = useUSDCPrice(uni)
  const blockTimestamp = useCurrentBlockTimestamp()
  const unclaimedUni = useTokenBalance(useMerkleDistributorContract()?.address, uni)
  const circulation: TokenAmount | undefined = useMemo(
    () =>
      blockTimestamp && uni && chainId === ChainId.MAINNET
        ? computeUniCirculation(uni, blockTimestamp, unclaimedUni)
        : totalSupply,
    [blockTimestamp, chainId, totalSupply, unclaimedUni, uni]
  )

  return (
    <ContentWrapper gap="lg">
      <ModalUpper>
        <CardBGImage />
        <CardNoise />
        <CardSection gap="md">
          <RowBetween>
            <TYPE.black color="black">Your FTHM Breakdown</TYPE.black>
            <StyledClose stroke="black" onClick={() => setShowUniBalanceModal(false)} />
          </RowBetween>
        </CardSection>
        <Break />
        {account && (
          <>
            <CardSection gap="sm">
              <AutoColumn gap="md" justify="center">
                <UniTokenAnimated width="48px" src={tokenLogo} />{' '}
                <TYPE.black fontSize={48} fontWeight={600} color="black">
                  {total?.toFixed(2, { groupSeparator: ',' })}
                </TYPE.black>
              </AutoColumn>
              <AutoColumn gap="md">
                <RowBetween>
                  <TYPE.black color="black">Balance:</TYPE.black>
                  <TYPE.black color="black">{uniBalance?.toFixed(2, { groupSeparator: ',' })}</TYPE.black>
                </RowBetween>
                {/*<RowBetween>*/}
                {/*  <TYPE.black color="black">Unclaimed:</TYPE.black>*/}
                {/*  <TYPE.black color="black">*/}
                {/*    {uniToClaim?.toFixed(4, { groupSeparator: ',' })}{' '}*/}
                {/*    {uniToClaim && uniToClaim.greaterThan('0') && (*/}
                {/*      <StyledInternalLink onClick={() => setShowUniBalanceModal(false)} to="/fthm">*/}
                {/*        (claim)*/}
                {/*      </StyledInternalLink>*/}
                {/*    )}*/}
                {/*  </TYPE.black>*/}
                {/*</RowBetween>*/}
              </AutoColumn>
            </CardSection>
            <Break />
          </>
        )}
        <CardSection gap="sm">
          <AutoColumn gap="md">
            <RowBetween>
              <TYPE.black color="black">FTHM price:</TYPE.black>
              <TYPE.black color="black">${uniPrice?.toFixed(2) ?? '-'}</TYPE.black>
            </RowBetween>
            <RowBetween>
              <TYPE.black color="black">FTHM in circulation:</TYPE.black>
              <TYPE.black color="black">{circulation?.toFixed(0, { groupSeparator: ',' })}</TYPE.black>
            </RowBetween>
            <RowBetween>
              <TYPE.black color="black">Total Supply</TYPE.black>
              <TYPE.black color="black">{totalSupply?.toFixed(0, { groupSeparator: ',' })}</TYPE.black>
            </RowBetween>
            {uni && uni.chainId === ChainId.MAINNET ? (
              <ExternalLink href={`https://uniswap.info/token/${uni.address}`}>View FTHM Analytics</ExternalLink>
            ) : null}
          </AutoColumn>
        </CardSection>
      </ModalUpper>
    </ContentWrapper>
  )
}
