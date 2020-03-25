import React from 'react'
import {types} from './types'
import {BACKGROUND_COLOR, ERASER_WIDTH} from '../consts'

export const initialState = {
  color: "#B80000",
  width: 1,
  clear: false,
  room: ""
}

export function reducer (state, action) {
  switch (action.type) {
    case types.SET_COLOR:
      return {...state, color: action.payload}
    case types.SET_WIDTH:
      return {...state, width: action.payload}
    case types.SET_CLEAR:
      return {...state, clear: action.payload}
    case types.SET_ROOM:
      return {...state, room: action.payload}
    case types.SET_ERASER:
      return {...state, color: BACKGROUND_COLOR, width: ERASER_WIDTH}
    case types.SET_PEN:
      return {...state, color: action.payload.color, width: action.payload.width}
    // case types.ALL:
    //   // console.log(action.payload)
    //   return {...state, color: action.payload.color, width: action.payload.width}
    default:
      return initialState
  }
}

export const Context = React.createContext(null)

