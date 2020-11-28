import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import { kebabCase } from 'lodash'


class WorkRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
              <article
                className={`work-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header className="columns">
                  {post.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail column is-4">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}

<section className="column is-8">
                <div className="column"><ul className="taglist">
                  {post.frontmatter.tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul></div>


                  <p className="post-meta column">
                    <Link
                      className={`title has-text-primary ${
                        post.frontmatter.futuredate == null ? 'disabled' : ''
                      }`}

                      disabled={`${post.frontmatter.futuredate == null ? 'disabled' : ''}`}

                      to={`${post.frontmatter.futuredate !== null ? post.fields.slug : ''}`}
                    
                    >
                      {post.frontmatter.title} {post.frontmatter.thisisatest}
                    </Link>
                    <span> &bull; </span>
                    <Link                      
                      className={`title url-link has-text-primary ${
                        post.frontmatter.futuredate == null ? 'disabled' : ''
                      }`}
                      disabled={`${post.frontmatter.futuredate == null ? 'disabled' : ''}`}

                      to={`${post.frontmatter.futuredate !== null ? post.frontmatter.urllink : ''}`}
                    >
                      {post.frontmatter.durationmonths}
                      {post.frontmatter.durationmonths !== null ? 'View Live' : 'Currently under NDA (public mid-2021)' }
                    </Link>
                    {post.frontmatter.thisisatest}
                  </p>
                  </section>
                </header>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

WorkRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query WorkRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "work-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                durationmonths
                tags
                templateKey
                date(formatString: "MMMM, YYYY")
                futuredate(formatString: "MMMM, YYYY")
                urllink
                thisisatest
                featuredpost
                outofdatepost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <WorkRoll data={data} count={count} />}
  />
)
