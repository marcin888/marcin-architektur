import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">
            <div className="logo-image-wrapper">
              <img
                src="/assets/logo.png"
                alt={data.site.siteMetadata.title}
              />
            </div>
          </Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>
        {data.site.siteMetadata.title} &copy; 2020 &bull; <a className="clickable" href="mailto:szumilas@architekturs.de">szumilas@architekturs.de</a>
        </p>
      </footer>
    </div>
  )
}