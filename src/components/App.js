import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading-bar'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'
import { BrowserRouter, Route } from 'react-router-dom'
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <LoadingBar />
        <Route path="/" exact component={Dashboard} />
        <Route path="/tweet/:id" component={TweetPage} />
        <Route path="/new" component={NewTweet} />
      </BrowserRouter>
    );
  }
}


export default connect()(App);
