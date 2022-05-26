import React from "react"
import {
  useTranslation,
  useI18next,
  Trans,
  Link,
} from "gatsby-plugin-react-i18next"
import ThemeToggle from "./Themes"
import Logo from "../svg/logo1.svg"
import Logo2 from "../svg/logo2.svg"

const Header = () => {
  const navLinks = [
    {
      url: "/historias",
      i18n_id: "historias",
    },
    {
      url: "/blog",
      i18n_id: "blog",
    },
    {
      url: "/about",
      i18n_id: "about",
    },
  ]
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <Logo className="w-16 h-16" />
        <Logo2 className="w-24 h-24" />
      </div>
      <header className="sticky top-0 h-16 navbar">
        <div className="navbar-start">
          <nav className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              {navLinks.map(({ url, i18n_id }, index) => (
                <li key={index}>
                  <Link to={url}>
                    <Trans>{i18n_id}</Trans>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link className="hidden sm:btn btn-info" to="/">
            Aldameros
          </Link>

          <ThemeToggle />
        </div>
        <nav className="hidden navbar-center lg:flex">
          <ul className="p-0 menu menu-horizontal">
            {navLinks.map(({ url, i18n_id }, index) => (
              <li key={index}>
                <Link to={url}>
                  <Trans>{i18n_id}</Trans>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar-end">
          <Link className="btn btn-primary" to="/adoption">
            Adoptar
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header
