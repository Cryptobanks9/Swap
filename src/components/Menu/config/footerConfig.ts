import { FooterLinkType } from 'cbui-kit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://cryptobanks.biz/#contact_06',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://cryptobanks.biz/#contact_06',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/cbcswap',
      },
      {
        label: t('Audits'),
        href: '#',
      },
    ],
  },
]
