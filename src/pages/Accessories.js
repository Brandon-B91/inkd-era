import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import SEO from "../components/seo";
import "../styles/main.scss";

const Accessories = ({ data, location }) => {
  return (
    <Layout>
      <SEO
        title="Accessories"
        description="stickers, car decals, and mystery packs all exclusive to Inkd Era"
        pathname={location.pathname}
      ></SEO>
      {/* <h1>{data.site.siteMetadata.title}</h1> */}
      <h1 className="text-light mt-5 mb-4">Accessories</h1>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          const image = getImage(node.frontmatter.image);
          return (
            <div className="d-inline-flex">
              <div className="flex-row">
                <Card className="m-2 mens-card">
                  <Link to={node.fields.slug}>
                    <GatsbyImage
                      className="card-img-top"
                      image={image}
                      alt={node.frontmatter.description}
                      loading="lazy"
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
                    {/* <CardSubtitle className="float-left mt-5">
                      Price: ${node.frontmatter.price}
                    </CardSubtitle>
                    <CardSubtitle>
                      <Badge color="danger float-right mt-5">
                        {node.frontmatter.tag}
                      </Badge>
                    </CardSubtitle> */}
                  </CardBody>
                  <CardFooter>
                    <CardSubtitle className="float-left d-inline price">
                      Price: ${node.frontmatter.price}
                    </CardSubtitle>
                    <CardSubtitle>
                      <Badge color="danger float-right d-inline badge">
                        {node.frontmatter.tag}
                      </Badge>
                    </CardSubtitle>
                  </CardFooter>
                </Card>
              </div>
            </div>
          );
        })}
        <Link to="/Contest">
          <div className="contestLink d-flex flex-column justify-content-center">
            <h2 className="text-light"> Contests</h2>
            <h3 className="text-light">
              {" "}
              Do you like free things? Who doesn't!
            </h3>
            <h5 className="text-light">Click here to learn more!</h5>
          </div>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { gender: { eq: "accessory" } } }
    ) {
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
                  height: 350
                  transformOptions: { fit: COVER, cropFocus: CENTER }
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

export default Accessories;
