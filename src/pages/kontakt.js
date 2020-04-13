import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <div className="content">
        <Helmet>
          <title>Kontakt — {site.siteMetadata.title}</title>
          <meta name="description" content={site.siteMetadata.description} />
        </Helmet>
        <div className="two-grids -contact">
          <div className="appear">
            <img
              src="/assets/marcin-szumilas.jpg"
              alt="/assets/marcin-szumilas.jpg"
            />
          </div>
          <div className="phs">
            <div className="mbm">
              <h2>Kontakt</h2>
              <p>
                <a className="select clickable" href="tel:+491799427991">
                  (+49) (0)179 94 279 91
                </a>
              </p>
              <p>
                <a className="clickable" href="mailto:szumilas@architekturs.de">szumilas@architekturs.de</a>  
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/marcin-lukasz-szumilas-21ab42b2/"
                  className="select clickable" target="_blank" rel="noopener noreferrer"
                >
                  Marcin Szumilas
                </a>
              </p>
            </div>
            <h2>Über mich</h2>
            <p>
              Ich studierte Architektur in Berlin an der Universität der Künste
              und Politecnico di Milano.
            </p>
            <p>
              Meine berufliche Laufbahn als Architekt begann 2011 bei Specht
              Kalleja + Partner Architekten GmbH und Baumschlager Eberle
              Architekten Berlin. Derzeit bin ich als Architekt bei Gewers
              Pudewill Architekten tätig.
            </p>
            <p>Ich bin ein Mitglied der Architektenkammer Berlin.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
