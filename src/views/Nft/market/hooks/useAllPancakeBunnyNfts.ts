import { useState, useEffect } from 'react'
import {
  getAllFathomBunniesLowestPrice,
  getAllFathomBunniesRecentUpdatedAt,
  getNftsFromCollectionApi,
} from 'state/nftMarket/helpers'
import { NftToken } from 'state/nftMarket/types'
import { fathomBunniesAddress } from '../constants'

// If collection is FathomBunnies - gets all available bunnies, otherwise - null
const useAllFathomBunnyNfts = (collectionAddress: string) => {
  const [allFathomBunnyNfts, setAllFathomBunnyNfts] = useState<NftToken[]>(null)

  const isPBCollection = collectionAddress === fathomBunniesAddress

  useEffect(() => {
    const fetchFathomBunnies = async () => {
      // In order to not define special TS type just for FathomBunnies display we're hacking a little bit into NftToken type.
      // On this page we just want to display all bunnies with their lowest prices and updates on the market
      // Since some bunnies might not be on the market at all, we don't refer to the redux nfts state (which stores NftToken with actual token ids)
      // We merely request from API all available bunny ids with their metadata and query subgraph for lowest price and latest updates.
      const response = await getNftsFromCollectionApi(fathomBunniesAddress)
      if (!response) return
      const { data } = response
      const bunnyIds = Object.keys(data)
      const [lowestPrices, latestUpdates] = await Promise.all([
        getAllFathomBunniesLowestPrice(bunnyIds),
        getAllFathomBunniesRecentUpdatedAt(bunnyIds),
      ])
      const allBunnies: NftToken[] = bunnyIds.map((bunnyId) => {
        return {
          // tokenId here is just a dummy one to satisfy TS. TokenID does not play any role in gird display below
          tokenId: data[bunnyId].name,
          name: data[bunnyId].name,
          description: data[bunnyId].description,
          collectionAddress: fathomBunniesAddress,
          collectionName: data[bunnyId].collection.name,
          image: data[bunnyId].image,
          attributes: [
            {
              traitType: 'bunnyId',
              value: bunnyId,
              displayType: null,
            },
          ],
          meta: {
            currentAskPrice: lowestPrices[bunnyId],
            updatedAt: latestUpdates[bunnyId],
          },
        }
      })
      setAllFathomBunnyNfts(allBunnies)
    }
    if (isPBCollection && !allFathomBunnyNfts) {
      fetchFathomBunnies()
    }
  }, [isPBCollection, allFathomBunnyNfts])

  return allFathomBunnyNfts
}

export default useAllFathomBunnyNfts
