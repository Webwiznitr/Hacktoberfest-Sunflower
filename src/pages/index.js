import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutUs from "./aboutus"

const IndexPage = () => (
  
    <>
      <Layout>
        <Seo title="Home" />
        <AboutUs/>
      </Layout>
    </>
  
)

export default IndexPage
