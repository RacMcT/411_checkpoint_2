import { connect } from "react-redux";
import ListingsPage from "../components/ListingPage.js";

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

export default connect(mapStateToProps)(ListingsPage);