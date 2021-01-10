import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image' 
import Footer from '../components/footer'
import Bcwlogo from "../components/bcwlogo"
import {Animated} from "react-animated-css"
import SignupForm from '../components/form' 

const IndexPage = ({data}) => {

return (
  <Layout>

    <SEO title="Bowcraft Works " />

          <section className="hero">
                <Animated animationIn="rubberBand" animationOut="fadeOut" isVisible={true}>
                  <Bcwlogo/>
                </Animated>
                <Img fluid={data.leathertools.childImageSharp.fluid} className="hero-image"/>

                <h2 className="hero-text"> 
                  Let us straighten your bow.
                </h2>
               
          </section>

          <section className="container">

               

            <span className="description">
              A beautiful balance of aesthetics and utility, 
              <strong>Bowcraft</strong> products are designed to make your day to day a little more 
              fun and a whole lot prettier while helping you carry your essential items in a safe, 
              compact and sleek manner. Each product is unique what you own is yours, truly yours.   
            </span>

            <div className="gallery-grid">
              <Img fluid={data.cuttingleather.childImageSharp.fluid} className="gallery-img1"/>
              <Img fluid={data.leathersleeve.childImageSharp.fluid} className="gallery-img2"/>
              <Img fluid={data.leatherwallet.childImageSharp.fluid} className="gallery-img3"/>
            </div>

            <div className="about-grid">
            <h2>We love design, we love stories and we love you.</h2>
              <p>The Bowcraft journey began as a project to celebrate the subtle elegance and gender neutral appeal of minimalist aesthetics while enjoying the thrill of solving basic user problems from a creative perspective. What started as a quest to find the true value of products we used in our own lives soon took the shape of a venture that sought to make the buying experience a niche yet socially conscious one for anybody who like us, was seeking something more from their buying decisions. 
              <br/><br/>Strongly inspired by the power of visual storytelling and the fluidity of working with design, Bowcraft aimed to achieve two major goals – first, how to retain a product’s essence without cutting out its beauty and second, how to empower the user to live and travel in style with something that was easy to carry, that was long lasting and that artfully blended with what they wore. 
              <br/><br/>Launched in 2019, the brand offers a carefully curated collection of handmade leather products that speak of fine craftsmanship, precise attention to detail and the timeless stories of those who make it. At Bowcraft, we design products that you would love to own with the added joy of knowing that your decision has promoted a larger cause.
              <br/><br/>So join us in celebrating beauty in its versatile form and enjoy a full throttle leather experience! 
              </p>
            </div>
          </section>
 
          <div className="parallax">     
            <SignupForm/>
          </div>


          
  
    
          <Footer />
  </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const pageQuery = graphql`
query {
  leathertools: file(relativePath: { eq: "leathertools.jpg" }) {
    ...fluidImage
  }
  leatherwallet: file(relativePath: { eq: "leatherwallet.jpg" }) {
    ...fluidImage
  }
  cuttingleather: file(relativePath: { eq: "cuttingleather.jpg" }) {
    ...fluidImage
  }
  rawleather: file(relativePath: { eq: "rawleather.jpg" }) {
    ...fluidImage
  }
  leathersleeve: file(relativePath: { eq: "leathersleeve.jpg" }) {
    ...fluidImage
  }
  logo: file(relativePath: { eq: "bocraftworkslogo.png" }) {
    ...fluidImage
  }
  bcwlogo: file(relativePath: { eq: "bcwlogo.svg" }) {
    ...fluidImage
  }
}
`;

export default IndexPage
