import { Text } from '@fathomswap/uikit'
import { useTranslation } from '@fathomswap/localization'

const BondlyWarning = () => {
  const { t } = useTranslation()

  return <Text>{t('Warning: BONDLY has been compromised. Please remove liquidity until further notice.')}</Text>
}

export default BondlyWarning
