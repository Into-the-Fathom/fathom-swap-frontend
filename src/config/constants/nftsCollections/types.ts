import { Address } from '../types'

export enum FathomCollectionKey {
  FATHOM = 'fathom',
  SQUAD = 'fathomSquad',
}

export type FathomCollection = {
  name: string
  description?: string
  slug: string
  address: Address
}

export type FathomCollections = {
  [key in FathomCollectionKey]: FathomCollection
}
