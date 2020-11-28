import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }



  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        id="topnav"
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
        
            <button
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </button>        

          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-right">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/work">
                Work
              </Link>
              <Link className="navbar-item" to="/articles">
                Articles
              </Link>
            <Link to="/" className="navbar-item logo" title="Logo">
              <img src={logo} alt="Melanie Linares" style={{ width: '88px' }} />
            </Link>
            </div>
          </div>

          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Melanie Linares" style={{ width: '88px' }} />
            </Link>        
            {/* Hamburger menu */}
          </div>

        </div>
      </nav>
    )
  }
}
export default Navbar