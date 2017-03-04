import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import './style.css'
import '../../static/fonts/fontawesome/style.css'

class SiteLinks extends React.Component {
    render () {

      return (
        <div className="blog-links">
          <ul>
            {config.siteTwitterUrl && (
              <li>
                <a href={config.siteTwitterUrl}>
                  <i className="fa fa-twitter" />
                </a>
              </li>
            )}
            {config.siteGithubUrl && (
              <li>
                <a href={config.siteGithubUrl}>
                  <i className="fa fa-github-alt" />
                </a>
              </li>
            )}
            {config.siteLinkedInUrl && (
              <li>
                <a href={config.siteLinkedInUrl}><i className="fa fa-linkedin" /></a>
              </li>
            )}
            {config.siteFacebookUrl && (
              <li>
                <a href={config.siteFacebookUrl}><i className="fa fa-facebook" /></a>
              </li>
            )}
          </ul>
          <ul>
            {config.siteYoutubeUrl && (
              <li>
                <a href={config.siteYoutubeUrl}>
                  <i className="fa fa-youtube-play" />
                </a>
              </li>
            )}
            {config.siteSoundcloudUrl && (
              <li>
                <a href={config.siteSoundcloudUrl}>
                  <i className="fa fa-soundcloud" />
                </a>
              </li>
            )}
          </ul>
          <ul>
            {config.siteEmailUrl && (
              <li>
                <a href={config.siteEmailUrl}>
                  <i className="fa fa-envelope-o" />
                </a>
              </li>
            )}
            {config.siteTelegramUrl && (
              <li>
                <a href={config.siteTelegramUrl}>
                  <i className="fa fa-paper-plane" />
                </a>
              </li>
                )}
          </ul>
          <ul>
            {config.siteRssUrl && (
              <li>
                <a href={config.siteRssUrl}><i className="fa fa-rss" /></a>
              </li>
            )}
          </ul>
        </div>
      )
  }
}

export default SiteLinks