import { AppContext, AppContextInterface } from '@app/context/AppContext'
import { useContext } from 'react'

export const useAppContext = (): AppContextInterface => {
  return useContext(AppContext) as AppContextInterface
}
