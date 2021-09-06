import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie"

import AddListingContainer from "./containers/AddListing.js"
import ListingPageContainer from "./containers/ListingPage.js"
import LoginContainer from "./containers/Login.js"

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => (checkAuth() ? <Component {...props} /> : <Redirect to="/" />)} />
}

const Router = () => {
  return (
    <Switch>
      <ProtectedRoute path="/addlisting" component={AddListingContainer} />
      <Route path="/ListingsPage/:id">
        <ListingPageContainer />
      </Route>
      <Route path="/login">
        <LoginContainer />
      </Route>
      <Route path="/">
        <ListingPageContainer checkAuth={checkAuth} />
      </Route>
    </Switch>
  )
}

export default Router;