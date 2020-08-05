import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { getFlats } from '../../store/actions/flatsActions'
import { CardInfo } from './components/CardInfo'

function mapStateToProps(state, ownProps) {
    const { id } = ownProps.match.params
    return {
        flat: state.flats.flats.find((i) => i.id === id || i._id === id),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFlats: () => dispatch(getFlats()),
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(CardInfo)
