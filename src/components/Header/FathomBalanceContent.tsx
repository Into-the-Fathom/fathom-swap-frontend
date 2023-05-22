import { ChainId, TokenAmount } from 'fathomswap-sdk'
import React, { useMemo } from 'react'
import { X } from 'react-feather'
import styled from 'styled-components'
import tokenLogo from 'assets/images/token-logo.svg'
import { FTHM } from 'constants/index'
import { useTotalSupply } from 'data/TotalSupply'
import { useActiveWeb3React } from 'hooks'
import useCurrentBlockTimestamp from 'hooks/useCurrentBlockTimestamp'
import { useAggregateUniBalance, useTokenBalance } from 'state/wallet/hooks'
import { ExternalLink, TYPE, FthmTokenAnimated } from 'theme'
import { computeUniCirculation } from 'utils/computeUniCirculation'
import usePrice from 'utils/usePrice'
import { AutoColumn } from 'components/Column'
import { RowBetween } from 'components/Row'
import { Break, CardBGImage, CardNoise, CardSection, DataCard } from 'components/earn/styled'

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
export default function FathomBalanceContent({ setShowUniBalanceModal }: { setShowUniBalanceModal: any }) {
  const { account, chainId } = useActiveWeb3React()
  const fthm = chainId ? FTHM[chainId] : undefined

  const total = useAggregateUniBalance()
  const fthmBalance: TokenAmount | undefined = useTokenBalance(account ?? undefined, fthm)
  // const uniToClaim: TokenAmount | undefined = useTotalUniEarned()

  const totalSupply: TokenAmount | undefined = useTotalSupply(fthm)
  const fthmPrice = usePrice(fthm)
  const blockTimestamp = useCurrentBlockTimestamp()
  const circulation: TokenAmount | undefined = useMemo(
    () =>
      blockTimestamp && fthm && chainId === ChainId.XDC
        ? computeUniCirculation(fthm, blockTimestamp, undefined)
        : totalSupply,
    [blockTimestamp, chainId, totalSupply, fthm]
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
                <FthmTokenAnimated width="48px" src={tokenLogo} />{' '}
                <TYPE.black fontSize={48} fontWeight={600} color="black">
                  {total?.toFixed(2, { groupSeparator: ',' })}
                </TYPE.black>
              </AutoColumn>
              <AutoColumn gap="md">
                <RowBetween>
                  <TYPE.black color="black">Balance:</TYPE.black>
                  <TYPE.black color="black">{fthmBalance?.toFixed(2, { groupSeparator: ',' })}</TYPE.black>
                </RowBetween>
              </AutoColumn>
            </CardSection>
            <Break />
          </>
        )}
        <CardSection gap="sm">
          <AutoColumn gap="md">
            <RowBetween>
              <TYPE.black color="black">FTHM price:</TYPE.black>
              <TYPE.black color="black">
                {fthmPrice ?? '$'} {fthmPrice?.toFixed(2) ?? '-'}
              </TYPE.black>
            </RowBetween>
            <RowBetween>
              <TYPE.black color="black">FTHM in circulation:</TYPE.black>
              <TYPE.black color="black">{circulation?.toFixed(0, { groupSeparator: ',' })}</TYPE.black>
            </RowBetween>
            <RowBetween>
              <TYPE.black color="black">Total Supply</TYPE.black>
              <TYPE.black color="black">{totalSupply?.toFixed(0, { groupSeparator: ',' })}</TYPE.black>
            </RowBetween>
            {fthm && fthm.chainId === ChainId.XDC ? (
              <ExternalLink href={`https://charts.fathom.fi/token/${fthm.address}`}>View FTHM Analytics</ExternalLink>
            ) : null}
          </AutoColumn>
        </CardSection>
      </ModalUpper>
    </ContentWrapper>
  )
}
