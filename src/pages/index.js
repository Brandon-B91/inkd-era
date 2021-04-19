import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Badge, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import ImgSlide from "../components/Slider";
import SEO from "../components/seo";
import "../styles/main.scss";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Inkd Era" description="tattoo clothing and apparel"></SEO>
      <div className="img-slide">
        <ImgSlide></ImgSlide>
      </div>
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      <h2 className="text-light mt-3 mb-4">Newest Arrivals! </h2>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const image = getImage(node.frontmatter.image);
          return (
            <div className="d-inline-flex">
              <div className="flex-row">
                <Card className="m-2 index-card" key={node.id}>
                  <Link to={node.fields.slug}>
                    <GatsbyImage
                      className="card-img-top"
                      image={image}
                      alt={node.frontmatter.description}
                    />
                  </Link>
                  <hr />
                  <CardBody>
                    <Link to={node.fields.slug}>
                      <CardTitle className="h4 text-light text-wrap">
                        {node.frontmatter.title}
                      </CardTitle>
                    </Link>
                    <CardSubtitle>{node.frontmatter.description}</CardSubtitle>
                    {/* <CardSubtitle>{node.excerpt}</CardSubtitle>   */}
                    <CardSubtitle className="float-left mt-5">
                      Price: ${node.frontmatter.price}
                    </CardSubtitle>
                    <CardSubtitle>
                      <Badge color="danger float-right mt-5">
                        {node.frontmatter.tag}
                      </Badge>
                    </CardSubtitle>
                  </CardBody>
                </Card>
              </div>
            </div>
          );
        })}
        <Link to="/Contest">
          <StaticImage
            style={{ width: "100%" }}
            className="mt-4"
            src="../images/contest.png"
            alt="image on present with contest written on it."
            placeholder="blurred"
            layout="constrained"
            height={350}
          />
        </Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
            price
            tag
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  formats: [AUTO, JPG]
                  width: 300
                  height: 200
                )
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
