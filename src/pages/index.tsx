import React from "react"
import { graphql } from "gatsby"
import { useTranslation, useI18next, Trans } from "gatsby-plugin-react-i18next"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Home = () => {
  const { t } = useTranslation()
  const { language } = useI18next()

  return (
    <Layout>
      <Seo lang={language} title={t("Aldameros")} />

      <h1>Aldameros</h1>
    </Layout>
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
