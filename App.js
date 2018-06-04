import React, { Component } from 'react'
import { connect } from 'react-redux'
import Main from './components/Main'
export default class App extends Component {
  constructor(props) {
    super(props)
    debugger
    this.store = props.store
  }
  render() {
    return (
      <Main store={this.store} />
    )
  }
}
