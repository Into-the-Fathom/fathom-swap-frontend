import { EventInfos, UserInfos, UserStatusEnum } from 'views/FathomSquad/types'

export type FathomSquadHeaderType = {
  account: string
  isLoading: boolean
  eventInfos?: EventInfos
  userInfos?: UserInfos
  userStatus: UserStatusEnum
}

export enum ButtonsEnum {
  ACTIVATE,
  BUY,
  MINT,
  END,
  NONE,
}
