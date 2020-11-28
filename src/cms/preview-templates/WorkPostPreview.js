import React from 'react'
import PropTypes from 'prop-types'
import { WorkPostTemplate } from '../../templates/work-post'

const WorkPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  return (
    <WorkPostTemplate
      content={widgetFor('body')}
      urldescription={entry.getIn(['data', 'urldescription'])}
      tags={tags && tags.toJS()}
      title={entry.getIn(['data', 'title'])}
      subheading={entry.getIn(['data', 'subheading'])}
    />
  )
}

WorkPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WorkPostPreview
