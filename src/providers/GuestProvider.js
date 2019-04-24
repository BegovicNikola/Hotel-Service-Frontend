import React, { useReducer } from 'react'
import { UPDATE_GUEST } from './guestActionTypes'

export const GuestContext = React.createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_GUEST: {
      console.log({ state, action })
      return {
        ...state,
        guestList: state.guestList.map(guest =>
          guest.uuid === action.payload.uuid ? (guest = action.payload) : guest
        )
      }
    }
    default:
      return state
  }
}

const initialState = {
  guestList: [
    { uuid: '1', name: 'John Doe', start: 1555941952, end: 1555942952 },
    { uuid: '2', name: 'Jane Joe', start: 1555942952, end: 1555943952 },
    { uuid: '3', name: 'Tim Pool', start: 1555943952, end: 1555944952 },
    { uuid: '4', name: 'Jim Cast', start: 1555944952, end: 1555945952 }
  ]
}

export const GuestProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GuestContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GuestContext.Provider>
  )
}
