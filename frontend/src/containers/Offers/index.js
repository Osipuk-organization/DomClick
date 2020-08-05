import { connect } from 'react-redux'
import { compose } from 'redux'
import { getFlats } from '../../store/actions/flatsActions'
import { Offers } from './components/Offers'

function mapStateToProps(state) {
    return {
        flats: state.flats.flats,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFlats: () => dispatch(getFlats()),
    }
}

export const OffersContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Offers)
