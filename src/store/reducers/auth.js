import { handleActions } from 'redux-actions'
import { FETCH_USER_INFO } from '../types/auth'

const defaultState = {
  userInfo: null
}

export default handleActions({
  [FETCH_USER_INFO] (state, action) {
    return {
      ...state,
      ...action.payload
    }
  }
}, defaultState)
