import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import TelegramSVG from "../svg/telegram.svg"
import TwitterSVG from "../svg/twitter.svg"
import WhatsappSVG from "../svg/whatsapp.svg"
import InstagramSVG from "../svg/instagram.svg"

const socialLinks = [
  {
    Component: TelegramSVG,
    href: "https://t.me/coloniaaldama",
    title: "Telegram",
  },
  {
    Component: TwitterSVG,
    href: "https://twitter.com/aldameros",
    title: "Twitter",
  },
  {
    Component: InstagramSVG,
    href: "https://instagram.com/aldameros",
    title: "Instagram",
  },
  {
    Component: WhatsappSVG,
    href: "https://chat.whatsapp.com/Edu9RNEBaqy05v2taTGkpi",
    title: "Grupo de WhatsApp 1",
  },
  {
    Component: WhatsappSVG,
    href: "https://chat.whatsapp.com/CPNvCgMzUEfEhRMtgALKjO",
    title: "Grupo de WhatsApp 2",
  },
  {
    Component: WhatsappSVG,
    href: "https://chat.whatsapp.com/F7lP2n75QLV8cm2emk1TM7",
    title: "Grupo de WhatsApp 3",
  },
]

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full text-center min-h-[20vh] bg-gradient-to-r bg-primario text-secundario">
      <ul className="flex flex-row flex-wrap mx-auto">
        {socialLinks.map(({ Component, href, title }, index) => (
          <li key={index} className="mx-2">
            <a
              href={href}
              target="_blank"
              className="block p-1 text-sm text-white transition duration-150 dark:text-secundario hover:text-gray-600 dark:hover:text-white "
              rel="noopener noreferrer"
              title={title}
            >
              <Component className="w-6 h-6" />
            </a>
          </li>
        ))}
        <li>
          <a
            href="/rss.xml"
            target="_blank"
            className="block p-1 text-sm text-white transition duration-150 dark:text-secundario hover:text-gray-600 dark:hover:text-white "
            rel="noopener noreferrer"
            title="RSS feed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
