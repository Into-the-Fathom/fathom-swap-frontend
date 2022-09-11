import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.fathomswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/fathomswap",
      },
      {
        label: "Community",
        href: "https://docs.fathomswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.fathomswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://fathomswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.fathomswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.fathomswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.fathomswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/fathomswap",
      },
      {
        label: "Documentation",
        href: "https://docs.fathomswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@fathomswap-1/s/fathomswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.fathomswap.finance/help/faq#is-fathomswap-safe-has-fathomswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.fathomswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/fathomswap",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/fathomswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/FathomSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/FathomSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/FathomSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/fathomswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/fathomswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/fathomswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/FathomSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/FathomswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/fathomswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/fathomswapfr",
      },
      {
        label: "Deutsch",
        href: "https://t.me/FathomSwap_DE",
      },
      {
        label: "Filipino",
        href: "https://t.me/Fathomswap_Ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/FathomSwapGeorgia",
      },
      {
        label: "हिन्दी",
        href: "https://t.me/FathomSwapINDIA",
      },
      {
        label: "Announcements",
        href: "https://t.me/FathomSwapAnn",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://reddit.com/r/fathomswap",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/fathomswap_official",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/fathomswap/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/fathomswap",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https://medium.com/fathomswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
