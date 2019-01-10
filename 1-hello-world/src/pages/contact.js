import React from 'react'
import Header from '../components/Header'
import { Link } from 'gatsby'

const linkStyle = {
  color: '#2d76f2',
  textDecoration: 'none'
}

const Contact = () => (
  <div className="content">
    <Header content='This is contact page'/>
    <Link to="/">Homeeeeeeees</Link>
  </div>
)

export default Contact