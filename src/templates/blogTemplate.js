import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail appear">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
              <div className="post-meta">{frontmatter.location}</div>
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div
              className="post-thumbnail appear"
              style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
            >
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
              <div className="post-meta">{frontmatter.location}</div>
            </div>
          )}
          <div className="blog-post-content pvm">
            <button className="button" onClick={() => window.history.back()}>
              &larr; Alle Projekte
            </button>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="blog-post-content pvm">
            <button className="button" onClick={() => window.history.back()}>
              &larr; Alle Projekte
            </button>
          </div>
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
      }
    }
  }
`;
