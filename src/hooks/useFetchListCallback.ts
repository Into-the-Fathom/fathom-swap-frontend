import { nanoid } from '@reduxjs/toolkit'
import { TokenList } from '@uniswap/token-lists'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'state'
import { fetchTokenList } from 'state/lists/actions'
import getTokenList from 'utils/getTokenList'
import resolveENSContentHash from 'utils/resolveENSContentHash'
import { useActiveWeb3React } from 'hooks/index'
import { Provider } from '@into-the-fathom/abstract-provider'

export function useFetchListCallback(): (listUrl: string, sendDispatch?: boolean) => Promise<TokenList> {
  const { library } = useActiveWeb3React()
  const dispatch = useDispatch<AppDispatch>()

  const ensResolver = useCallback(
    (ensName: string) => {
      return resolveENSContentHash(ensName, library as Provider)
    },
    [library]
  )

  // note: prevent dispatch if using for list search or unsupported list
  return useCallback(
    async (listUrl: string, sendDispatch = true) => {
      const requestId = nanoid()
      sendDispatch && dispatch(fetchTokenList.pending({ requestId, url: listUrl }))
      return getTokenList(listUrl, ensResolver)
        .then(tokenList => {
          sendDispatch && dispatch(fetchTokenList.fulfilled({ url: listUrl, tokenList, requestId }))
          return tokenList
        })
        .catch(error => {
          console.debug(`Failed to get list at url ${listUrl}`, error)
          sendDispatch && dispatch(fetchTokenList.rejected({ url: listUrl, requestId, errorMessage: error.message }))
          throw error
        })
    },
    [dispatch, ensResolver]
  )
}
