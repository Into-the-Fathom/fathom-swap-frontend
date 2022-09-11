import { useRouter } from 'next/router'
import PageLoader from 'components/Loader/PageLoader'
import { fathomBunniesAddress } from '../../constants'
import IndividualFathomBunnyPage from './FathomBunnyPage'
import IndividualNFTPage from './OneOfAKindNftPage'

const IndividualNFTPageRouter = () => {
  const router = useRouter()
  // For FathomBunnies tokenId in url is really bunnyId
  const { collectionAddress, tokenId } = router.query

  if (router.isFallback) {
    return <PageLoader />
  }

  const isPBCollection = String(collectionAddress).toLowerCase() === fathomBunniesAddress.toLowerCase()
  if (isPBCollection) {
    return <IndividualFathomBunnyPage bunnyId={String(tokenId)} />
  }

  return <IndividualNFTPage collectionAddress={String(collectionAddress)} tokenId={String(tokenId)} />
}

export default IndividualNFTPageRouter
