import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Features from '../components/Features'

export const WorkPostTemplate = ({
  content,
  contentComponent,
  description,
  thisisatest,
  textA,
  tags,
  title,
  subheading,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2">
              <b>{title}</b> {thisisatest}
            </h1>
            <p>{subheading}</p>   
            {textA}  

            
  
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
  description: PropTypes.string,
  thisisatest: PropTypes.string,
  textA: PropTypes.string,
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
      description={post.frontmatter.description}
      thisisatest={post.frontmatter.thisisatest}
      textA={post.frontmatter.textA}

        helmet={
          <Helmet titleTemplate="%s | Work">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
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
        subheading
        description
        thisisatest
        textA
        tags
      }
    }
  }
`
