import { connect, Connect } from "react-redux"
import AddListing from "../components/addListing/AddListing"
import { addListing } from "../redux/actions"

const mapStateToProps = state => {
  return {
    listings: state.listings
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addListing: listing => dispatch(addListing(listing))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddListing)