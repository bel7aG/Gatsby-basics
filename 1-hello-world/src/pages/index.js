import React from "react"
import Header from '../components/Header'
import { Link } from 'gatsby'

const Home = () => (
  <div className="content">
    <Header content='Wassup i use some gatsby here!! Welcom Home' />
    <Link to="/contact/">Contact</Link>
  </div>
)

export default Home