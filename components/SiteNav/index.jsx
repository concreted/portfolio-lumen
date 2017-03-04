import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteNav extends React.Component {
    render() {
        const {location} = this.props
        return (
            <nav className='blog-nav'>
              <ul>
                <li>
                  <Link to={ prefixLink('/')} activeClassName="current" onlyActiveOnIndex> Blog
                  </Link>
                </li>
                <li>
                  <Link to={ prefixLink('/about/')} activeClassName="current"> About me
                  </Link>
                </li>
                <li>
                  <Link to={ prefixLink('/animation/')} activeClassName="current"> Animation
                  </Link>
                </li>
                <li>
                  <Link to={ prefixLink('/code/')} activeClassName="current"> Code
                  </Link>
                </li>
                <li>
                  <Link to={ prefixLink('/comics/')} activeClassName="current"> Comics
                  </Link>
                </li>
              </ul>
            </nav>
        );
    }
}

SiteNav.propTypes = {
    location: React.PropTypes.object,
}

export default SiteNav
