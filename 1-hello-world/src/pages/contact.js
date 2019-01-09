import React from "react"
import Header from '../components/Header'
import { Link } from 'gatsby'

const Contact = () => (
  <div className="content">
    <Header content='This is contact page' />
    <Link to="/">Home</Link>
  </div>
)

export default Contact