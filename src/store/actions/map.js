import { FETCH_LOCATION } from '../types/map'
import { createAction } from 'redux-actions'

export const fetchLocation = createAction(FETCH_LOCATION, () => {
  return new Promise(resolve => {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        resolve({
          lat: res.latitude,
          lng: res.longitude
        })
      }
    })
  })
})
