import React from "react"
import { graphql } from "gatsby"
import { useTranslation, useI18next, Trans } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const Home = () => {
  const { t } = useTranslation()
  const { language } = useI18next()

  return (
    <Layout>
      <Seo lang={language} title={t("Aldameros")} />

      <section className="w-full min-h-full hero bg-base-200">
        <div className="flex-col text-center lg:text-left hero-content lg:flex-row">
          <StaticImage
            className="max-w-sm shadow-2xl -z-10"
            src="../images/photo_01.jpg"
            alt="Aldameros"
          />
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Aldameros</h1>
            <p className="py-6">
              Aldameros es un proyecto cubano animalista para promocionar la
              adopción y protección de gatos
            </p>
            <button className="btn btn-primary">Saber más</button>
          </div>
        </div>
      </section>
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
