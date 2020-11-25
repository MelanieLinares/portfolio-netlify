import React from 'react'

import Layout from '../../components/Layout'
import WorkRoll from '../../components/WorkRoll'

export default class WorkIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            <p><b>Work Case studies</b></p> Many times during projects I take on many roles: designer, developer, illustrator, and teacher. Here are some of my recent projects and the process behind them. 

          </h1>
        <p>If you have questions on any of these projects or would like to discuss how I may be right for your project please <Link className="navbar-item" to="/">get in touch</Link>.</p>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <WorkRoll />
            </div>
        
           <div className="content">
              If you are interested in learning more about the type of teams I enjoy working with, please introduce yourself over on <Link className="navbar-item" to="/">LinkedIn</Link> and let’s chat!  
           </div>
        
          </div>
        </section>
      </Layout>
    )
  }
}
