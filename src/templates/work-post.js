import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const WorkPostTemplate = ({
  content,
  contentComponent,
  url,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{url}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

WorkPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  url: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const WorkPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WorkPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        url={post.frontmatter.yrl}
        helmet={
          <Helmet titleTemplate="%s | Work">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="url"
              content={`${post.frontmatter.url}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

WorkPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default WorkPost

export const pageQuery = graphql`
  query WorkPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM, YYYY")
        title
        url
        tags
      }
    }
  }
`
