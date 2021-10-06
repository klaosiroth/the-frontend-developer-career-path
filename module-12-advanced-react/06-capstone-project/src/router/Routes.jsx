import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import Photos from '../pages/Photos'
import Cart from '../pages/Cart'

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  )
}
