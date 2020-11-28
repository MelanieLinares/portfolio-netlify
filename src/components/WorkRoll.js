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
                <p className="column"><ul className="taglist">
                  {post.frontmatter.tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul></p>


                  <p className="post-meta column">
                    <Link
                      className={`title has-text-primary ${
                        post.frontmatter.futuredate == null ? 'disabled' : ''
                      }`}

                      disabled={`${post.frontmatter.futuredate == null ? 'disabled' : ''}`}

                      to={`${post.frontmatter.futuredate !== null ? post.fields.slug : ''}`}
                    
                    >
                      {post.frontmatter.title} {post.frontmatter.subheading}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-block">
                      <p>{post.frontmatter.date} - {post.frontmatter.futuredate == null ? <span>ongoing</span> : <span>{post.frontmatter.futuredate}</span> }
                      {post.frontmatter.durationmonths !== null ? ' (' : '' }
                      {post.frontmatter.durationmonths > 12 && post.frontmatter.durationmonths !== null ? '1+' : '' }
                      {post.frontmatter.durationmonths < 13 && post.frontmatter.durationmonths !== null ? <span>{post.frontmatter.durationmonths}</span> : '' }
                      {post.frontmatter.durationmonths > 12 && post.frontmatter.durationmonths !== null ? ' year' : '' }
                      {post.frontmatter.durationmonths < 13 && post.frontmatter.durationmonths !== null ? ' month' : '' }
                      {post.frontmatter.durationmonths > 1 ? 's' : '' }
                      {post.frontmatter.durationmonths !== null ? ')' : '' }
                    </p>

                    <Link                      
                      className={`itle url-link has-text-primary ${
                        post.frontmatter.futuredate == null ? 'disabled' : ''
                      }`}
                      disabled={`${post.frontmatter.futuredate == null ? 'disabled' : ''}`}

                      to={`${post.frontmatter.futuredate !== null ? post.fields.urllink : ''}`}
                    >
                      {post.frontmatter.durationmonths !== null ? 'View Live' : 'Currently under NDA (public mid-2021)' }
                    </Link>
                        <span className={`${post.frontmatter.outofdatepost ? 'is-outofdate' : ''}`}>
                            (note: site *may* be out of sync with case study results)
                        </span>
                    </span>
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
                subheading
                durationmonths
                tags
                templateKey
                date(formatString: "MMMM, YYYY")
                futuredate(formatString: "MMMM, YYYY")
                urllink
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
