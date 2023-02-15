import React from 'react'
import styled from 'styled-components'
import Settings from 'components/Settings'
import { RowBetween } from 'components/Row'
import { TYPE } from 'theme'

const StyledSwapHeader = styled.div`
  padding: 1.5rem 1rem 0.5rem 1.5rem;
  width: 100%;
  max-width: 600px;
  color: ${({ theme }) => theme.text2};
`

const SwapHeaderRow = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.white};
`

export default function SwapHeader() {
  return (
    <StyledSwapHeader>
      <RowBetween>
        <SwapHeaderRow>
          <TYPE.white>Swap</TYPE.white>
        </SwapHeaderRow>
        <Settings />
      </RowBetween>
    </StyledSwapHeader>
  )
}
