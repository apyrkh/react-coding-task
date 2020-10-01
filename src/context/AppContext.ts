import { Localization } from '@app/i18n/Localization'
import React from 'react'

export interface AppContextInterface {
  l10n: Localization
}

export const AppContext = React.createContext<AppContextInterface | null>(null)
