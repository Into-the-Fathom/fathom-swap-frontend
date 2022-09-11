import { Grid } from '@fathomswap/uikit'
import orderBy from 'lodash/orderBy'
import { CollectibleLinkCard } from '../../components/CollectibleCard'
import useAllFathomBunnyNfts from '../../hooks/useAllFathomBunnyNfts'
import GridPlaceholder from '../../components/GridPlaceholder'

interface CollectionNftsProps {
  address: string
  sortBy?: string
}

const FathomBunniesCollectionNfts: React.FC<React.PropsWithChildren<CollectionNftsProps>> = ({
  address,
  sortBy = 'updatedAt',
}) => {
  const allFathomBunnyNfts = useAllFathomBunnyNfts(address)

  const sortedNfts = allFathomBunnyNfts
    ? orderBy(allFathomBunnyNfts, (nft) => (nft.meta[sortBy] ? Number(nft?.meta[sortBy]) : 0), [
        sortBy === 'currentAskPrice' ? 'asc' : 'desc',
      ])
    : []

  if (!sortedNfts.length) {
    return <GridPlaceholder />
  }

  return (
    <>
      <Grid
        gridGap="16px"
        gridTemplateColumns={['1fr', null, 'repeat(3, 1fr)', null, 'repeat(4, 1fr)']}
        alignItems="start"
      >
        {sortedNfts.map((nft) => {
          return <CollectibleLinkCard key={`${nft?.tokenId}-${nft?.collectionName}`} nft={nft} />
        })}
      </Grid>
    </>
  )
}

export default FathomBunniesCollectionNfts
