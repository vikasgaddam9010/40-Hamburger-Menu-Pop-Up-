import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import {Switch, Route, Redirect} from 'react-router-dom'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/notfound" component={NotFound} />
    <Redirect to="/notfound" component={NotFound} />
  </Switch>
)

export default App
