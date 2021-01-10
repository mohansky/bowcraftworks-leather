import React from "react"
import Img from "gatsby-image"
import useInstagram from "../hooks/use-instagram"
import Heart from "./heart"
 

const Instagram = () => {
  const nodes = useInstagram()

  return (
    <div className="instagram-grid">
      {nodes.map((post) => {
        const title = post.caption ? post.caption.split(`#`)[0] : ``
        const date = new Date(post.timestamp * 1000).toLocaleDateString(`de-DE`)

        return (
          <a key={post.id} className="instagram-link-styles" href={`https://www.instagram.com/p/${post.id}/`}>
            <div className="instagram-overlay" />
            <Img fluid={post.localFile.childImageSharp.fluid} />
            <div className="instagram-content">
              <div className="instagram-title">{title}</div>
              <div className="instagram-bottom">
                <span className="instagram-heart">
                  <Heart /> {post.likes}
                </span>
                <span>{date}</span>
              </div>
            </div>
          </a>
          
        )
      })}
    </div>
  )
}

export default Instagram



{/*import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';


const Instagram = () => {
  const data = useStaticQuery(graphql`
  query {
    allInstaNode(
      limit:6,
      sort: {
        fields: [timestamp]
        order: [DESC]
      }
    ) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          localFile {
            childImageSharp {
              fixed(width: 280, height: 280) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
  `)
  const instaPosts = data.allInstaNode.edges;
  return (
    <div className="insta">
      <h2>INSTAGRAM</h2>
      <span>
        <a className="insta-link" href="https://www.instagram.com/bow.craftworks/?hl=en" target="_blank" rel="noopener noreferrer"> 
        @bow.craftworks
        </a>
      </span>
      <ul className="insta-posts">
          {instaPosts.map(({ node }) => {
            return (
              <li key={node.id} className="insta-post">
                <Img fixed={node.localFile.childImageSharp.fixed} />
                <div className="overlay">
                  <img className="icon" src={require('../images/like.png')} alt="like icon"/>
                  <p className="text">{node.likes}</p>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Instagram;*/}

