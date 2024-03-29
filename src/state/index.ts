import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'

import application from 'state/application/reducer'
import { updateVersion } from 'state/global/actions'
import user from 'state/user/reducer'
import transactions from 'state/transactions/reducer'
import swap from 'state/swap/reducer'
import mint from 'state/mint/reducer'
import lists from 'state/lists/reducer'
import burn from 'state/burn/reducer'
import multicall from 'state/multicall/reducer'

const PERSISTED_KEYS: string[] = ['user', 'transactions', 'lists']

const store = configureStore({
  reducer: {
    application,
    user,
    transactions,
    swap,
    mint,
    burn,
    multicall,
    lists
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), save({ states: PERSISTED_KEYS })],
  preloadedState: load({ states: PERSISTED_KEYS })
})

store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
