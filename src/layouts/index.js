import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'

const ListLink = ({to, children}) => (
  <li style={{ display: 'inline-block', marginLeft: '1rem' }}>
    <Link to={to}>
      {children}
    </Link>
  </li>
)

const SiteTitle = ({title}) => (
  <Link to="/" style={{
    textShadow: 'none',
    backgroundImage: 'none',
  }}>
    <h1 style={{ display: 'inline' }}>
      {title}
    </h1>
  </Link>
)

const SiteHeader = ({title}) => (
  <header
    style={{ marginTop: 0, marginBottom: '1.5rem' }}>
    <ul style={{
      margin: 0,
      listStyle: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    }}>
      <li style={{marginRight: 'auto'}}>
        <SiteTitle title={title} />
      </li>
      <ListLink to="/archives">Archives</ListLink>
      <ListLink to="/about">About</ListLink>
      <ListLink to="/contact">Contact</ListLink>
    </ul>
  </header>
)

export default ({children, data}) => (
  <div
    style={{
      maxWidth: rhythm(24),
      margin: `${rhythm(1.5)} auto`,
      padding: `0 ${rhythm(1)} ${rhythm(0.5)} ${rhythm(1)}`,
    }}
  >
    <SiteHeader title={data.site.siteMetadata.title} />
    {children()}
  </div>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`