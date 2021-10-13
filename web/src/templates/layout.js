import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Chem from "../components/chem"

import "../styles/main.scss"
import * as styles from "../styles/layout.module.scss"

require("katex/dist/katex.min.css")

const shortcodes = { Link, C: Chem }

export default function Layout({ data }) {
  const post = data.mdx
  return (
    <>
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/katex@0.13.18/dist/contrib/mhchem.min.js"
        integrity="sha384-LIgAiYlGSAdpNC9+YDjDPF6JeS/RRIumtNo0CmyQERZ/+g0h9MbuYQwf/5pQ4Y4M"
        crossorigin="anonymous"
      ></script>
      <div className={styles.mainContainer}>
        <h1>{post.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
      }
    }
  }
`
