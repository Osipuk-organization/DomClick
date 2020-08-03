// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { withRouter } from "react-router";
// import { getFlats } from 'actions/flatsActions';
// import { CardInfo } from 'components/CardInfo';

// function mapStateToProps(state, ownProps) {
//   // const { id } = ownProps.match.params;
//   console.log('CARD', state.flats.flats)
//   return {
//     ...ownProps,
//     // flat: state.flats.flats.filter(i => i.id == id || i._id == id)[0],
//     flats: state.flats.flats,
//   }
// }

// function mapDispatchToProps(dispatch, props) {
//   return {
//     ...props,
//     getFlats: () => dispatch(getFlats()),
//   }
// }

// export const CardInfoContainer = compose(
//   withRouter,
//   connect(mapStateToProps, mapDispatchToProps),
// )(CardInfo);

import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router";
import { getFlats } from "actions/flatsActions";
import { CardInfo } from "components/CardInfo";

function mapStateToProps(state, ownProps) {
  console.log("CARD", state.flats.flats);
  const { id } = ownProps.match.params;
  return {
    ...ownProps,
    flat: state.flats.flats.filter((i) => i.id == id || i._id == id)[0],
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    getFlats: () => dispatch(getFlats()),
  };
}

export const CardInfoContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CardInfo);
