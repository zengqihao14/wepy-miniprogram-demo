import { FETCH_USER_INFO } from '../types/auth'
import { createAction } from 'redux-actions'

export const fetchUserInfo = createAction(FETCH_USER_INFO, (res) => {
  return new Promise((resolve) => {
    return resolve({
      userInfo: res.detail.userInfo
    })
  })
})
