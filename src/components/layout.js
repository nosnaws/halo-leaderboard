/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        css={css`
          height: 100vh;
          background-color: #0f1221;
          color: white;
          --border-color: #6085a2;

          @media (max-width: 500px) {
            height: 100%;
          }
        `}
      >
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
          css={css`
            margin-top: 5rem;
            margin: 1.5rem auto 0 auto;
            max-width: 960px;
            padding: 0 1.0875rem 1.45rem;
          `}
        >
          <main>{children}</main>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
