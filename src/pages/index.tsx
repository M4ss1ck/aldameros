import React from "react"
import { graphql } from "gatsby"
import { useTranslation, useI18next, Trans } from "gatsby-plugin-react-i18next"
import Footer from "../components/Footer"
import Seo from "../components/Seo"
import Language from "../components/Language"
import DarkToggle from "../components/DarkToggle"

const Home = () => {
  const { t } = useTranslation()
  const { language } = useI18next()

  return (
    <>
      <Seo lang={language} title={t("Aldameros")} />
      <main className="container flex flex-col items-center justify-center w-full mx-auto text-primario bg-fondo">
        <h1>Aldameros</h1>
      </main>
      <Footer />
    </>
  )
}

export default Home
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
