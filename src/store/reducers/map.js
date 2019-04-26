import { handleActions } from 'redux-actions'
import { FETCH_LOCATION, SET_LOCATION } from '../types/map'

const defaultState = {
  lat: 0,
  lng: 0
}

export default handleActions({
  [FETCH_LOCATION] (state, action) {
    console.log('action', action)
    console.log('state', state)
    return {
      ...state,
      lat: 20,
      lng: 20
    }
  },
  [SET_LOCATION] (state, action) {
    console.log('setLocation', state, action.payload)
    return {
      ...state,
      ...action.payload
    }
  }
}, defaultState)
