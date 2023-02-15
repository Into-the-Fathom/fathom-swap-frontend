import { Web3Provider } from '@into-the-fathom/providers'

export default function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider, 'any')
  library.pollingInterval = 50
  return library
}
