import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import Logo2 from "../svg/logo2.svg"
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
    <footer className="items-center p-2 sm:p-10 footer bg-neutral text-neutral-content">
      <div className="grid grid-flow-col justify-self-center">
        <Logo2 className="w-36 h-36" />
      </div>
      <div className="grid grid-flow-col gap-2 sm:gap-8 sm:place-self-center justify-self-center">
        <ul className="grid grid-flow-row sm:place-self-center justify-self-center">
          <li className="w-full text-center footer-title">Social</li>
          {socialLinks
            .filter(({ Component, href, title }) => !title.includes("Grupo de"))
            .map(({ Component, href, title }, index) => (
              <li key={index} className="mx-2">
                <a
                  href={href}
                  target="_blank"
                  className="flex flex-row p-1 text-sm transition duration-150 hover:text-info"
                  rel="noopener noreferrer"
                  title={title}
                >
                  <Component className="w-6 h-6" />{" "}
                  <span className="px-2">{title}</span>
                </a>
              </li>
            ))}
          {/* <li>
            <a
              href="/rss.xml"
              target="_blank"
              className="block p-1 text-sm transition duration-150"
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
          </li> */}
        </ul>
        <ul className="grid grid-flow-row sm:place-self-center justify-self-center">
          <li className="w-full text-center footer-title">Grupos</li>
          {socialLinks
            .filter(({ Component, href, title }) => title.includes("Grupo de"))
            .map(({ Component, href, title }, index) => (
              <li key={index} className="mx-2">
                <a
                  href={href}
                  target="_blank"
                  className="flex flex-row p-1 text-sm transition duration-150 hover:text-info"
                  rel="noopener noreferrer"
                  title={title}
                >
                  <Component className="w-6 h-6" />{" "}
                  <span className="px-2">{title}</span>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
