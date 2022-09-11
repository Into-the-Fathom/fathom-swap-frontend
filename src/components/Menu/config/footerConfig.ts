import { FooterLinkType } from '@fathomswap/uikit'
import { ContextApi } from '@fathomswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.fathomswap.finance/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.fathomswap.finance/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/fathomswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.fathomswap.finance/contact-us/telegram',
      },
      {
        label: t('Litepaper'),
        href: 'https://v2litepaper.fathomswap.finance/',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://fathomswap.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.fathomswap.finance/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.fathomswap.finance/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.fathomswap.finance/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/fathomswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.fathomswap.finance',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.fathomswap.finance/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.fathomswap.finance/help/faq#is-fathomswap-safe-has-fathomswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.fathomswap.finance/hiring/become-a-chef',
      },
    ],
  },
]
