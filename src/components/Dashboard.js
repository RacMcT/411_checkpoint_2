import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "react"

import "./Dashboard.css"

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Dashboard = props => {
  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Austin Small Businesses
          </Typography>
          <ul className="dashboard-list">
            <li className="dashboard-list-item">
              <Link to="/listing">Listings</Link>
            </li>
            {checkAuth() ? (
              <li className="dashboard-list-item">
                <Link to="/addListing">Add</Link>
              </li>
            ) : null}
            {checkAuth() ? (
              <li
                onClick={() => {
                  document.cookie = "loggedIn="
                  window.location.replace("/login")
                }}
                className="dashboard-list-item"
              >
                <Link to="/">Logout</Link>
              </li>
            ) : (
              <li className="dashboard-list-item">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </Toolbar>
      </AppBar>

      {checkAuth() ? (
        <div className="UserBar" position="relative">
          <Typography variant="p" style={{ flexGrow: "1"}}>
            {props.user}
          </Typography>
        </div>
      ) : null}
    </>
  )
}

export default Dashboard