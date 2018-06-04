import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import About from './About'
import HomePage from './HomePage'
import InputPreview from './InputPreview'
import { setMessage } from '../actions/message'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.message.message
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setMessage: setMessage
  }, dispatch)
}

class Main extends React.Component {
  _onChange = (value) => {
    debugger
    this.props.setMessage(value)
  }

  render() {
    debugger
    return (
      <div>
        <InputPreview
          value={this.props.message}
          onChange={this._onChange}
        />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
