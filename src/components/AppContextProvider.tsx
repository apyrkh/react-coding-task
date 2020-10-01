import { AppContext, AppContextInterface } from '@app/context/AppContext'
import { Localization } from '@app/i18n/Localization'
import texts_en from '@app/i18n/texts/texts_en.json'
import React, { FC, ReactNode, useMemo } from 'react'

interface Props {
  children: ReactNode
}

const Component: FC<Props> = ({ children }) => {
  const locale = 'en'
  const appContext = useMemo<AppContextInterface>(() => {
    const l10n = new Localization(locale, texts_en)
    return {
      l10n: l10n
    }
  }, [locale])

  return (
    <AppContext.Provider value={appContext}>
      {children}
    </AppContext.Provider>
  )
}

export const AppContextProvider = React.memo(Component)
