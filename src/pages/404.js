import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: no encontrado</h1>
    <p>La página que estás buscando no existe</p>
  </Layout>
)

export default NotFoundPage
