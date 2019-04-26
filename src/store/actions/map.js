import { FETCH_LOCATION, SET_LOCATION } from '../types/map'
import { createAction } from 'redux-actions'

export const fetchLocation = createAction(FETCH_LOCATION, () => {
  // return new Promise(resolve => {
  //   wx.getLocation({
  //     type: 'wgs84',
  //     success: (res) => {
  //       console.log('res', res)
  //       resolve({
  //         lat: res.latitude,
  //         lng: res.longitude
  //       })
  //     }
  //   })
  // })
  console.log('action fetchLocation')
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})

export const setLocation = createAction(SET_LOCATION, () => {
  console.log('action setLocation')
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        lat: 30,
        lng: 130
      })
    }, 1000)
  })
})
