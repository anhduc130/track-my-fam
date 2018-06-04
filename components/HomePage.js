import React from 'react'
import { Link } from 'react-router-dom'
export default class Mainpage extends React.Component {
  render() {
    return (
      <div>
        My Main page
       <Link to='/about'>
          <button>Go to About</button>
        </Link>
      </div>
    )
  }
}
