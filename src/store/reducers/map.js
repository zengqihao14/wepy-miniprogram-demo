import { handleActions } from 'redux-actions'
import { FETCH_LOCATION } from '../types/map'

const defaultState = {
  lat: 0,
  lng: 0
}

export default handleActions({
  [FETCH_LOCATION] (state, action) {
    return {
      ...state,
      ...action.payload
    }
  }
}, defaultState)
