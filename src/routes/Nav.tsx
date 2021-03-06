import { Router, Switch, Route } from 'wouter'
import ActiveLink from '../components/ActiveLink'

import logo from '../logo.svg'

const Nav = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <ActiveLink href="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/about">About</ActiveLink>
            </li>
            <li>
              <ActiveLink href="/users">Users</ActiveLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Nav
