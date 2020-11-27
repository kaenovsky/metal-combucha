import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />      
      <h1 className='site-title-radio'>
      <img className='x-index-cross' src="https://taberna-odin-bucket.eu-central-1.linodeobjects.com/cross.svg" alt='cross'></img>
      Taberna Odin Live</h1>
      <div class="video-container">
        <iframe 
          title='Odin Live Video Player'
          src="https://www.youtube.com/embed/UzRhvMDRGfc"
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>      
  </Layout>
)

export default IndexPage
