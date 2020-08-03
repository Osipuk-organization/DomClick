import { connect } from "react-redux";
import { compose } from "redux";
import { getFlats } from "actions/flatsActions";
import { Offers } from "components/Offers";

function mapStateToProps(state, ownProps) {
  console.log("CARD", state.flats.flats);
  return {
    ...ownProps,
    flats: state.flats.flats,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getFlats: () => dispatch(getFlats()),
  };
}

export const OffersContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Offers);
