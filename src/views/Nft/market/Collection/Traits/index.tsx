import { useRouter } from 'next/router'
import Container from 'components/Layout/Container'
import FathomBunniesTraits from './FathomBunniesTraits'
import { fathomBunniesAddress } from '../../constants'
import CollectionTraits from './CollectionTraits'

const Traits = () => {
  const collectionAddress = useRouter().query.collectionAddress as string

  return (
    <>
      <Container py="40px">
        {collectionAddress === fathomBunniesAddress ? (
          <FathomBunniesTraits collectionAddress={collectionAddress} />
        ) : (
          <CollectionTraits collectionAddress={collectionAddress} />
        )}
      </Container>
    </>
  )
}

export default Traits
