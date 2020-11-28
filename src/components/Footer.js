import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const today = new Date();
const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">

        <div className="content">
            <p>I am not currently looking for extra projects… <br/>But if you’d like to chat or make my day, feel free to <Link className="" to="/" >reach out to me</Link> or <Link className="" to="/" >buy me a coffee</Link>.</p>

                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/" >
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/">
                        CodePen
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/">
                       Github
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/">
                       LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/">
                       Twitch
                      </Link>
                    </li>
                  </ul> 

        <p className="content column has-text-centered">
            © {today.getFullYear()} Copyright Melanie Linares. All rights reserved.
        </p>

        </div>
      </footer>
    )
  }
}

export default Footer
