const React = require('react')
const ReactDOM = require('react-dom')
const Layout = require('./Layout')
const Landing = require('./Landing')
const Search = require('./Search')
const Details = require('./Details')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { shows } = require('../public/data')

const App = React.createClass({
  assignShow (nextState, replace) {
    const show = shows.find(show => show.imdbID === nextState.params.id)

    if (!show) {
      return replace('/')
    }

    Object.assign(nextState.params, show)
    return nextState
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={shows} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
