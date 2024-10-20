import React from "react"

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()} Seyeon Jeong, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a> and{" "}
      <a
        href="https://github.com/renyuanz/leonids"
        target="_blank"
        rel="noreferrer"
      >
        Leonids theme
      </a>
      .
    </footer>
  )
}

export default Footer
