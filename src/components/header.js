// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `0.45rem`,
      height: `7.1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.45rem 1.0875rem`,
      }}
    >
      <div className='logo-wrapper'>
        <img src="https://taberna-odin-bucket.eu-central-1.linodeobjects.com/logo-odin-transparente.png" alt='logo'>
        </img>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
