import { GET_PART, GET_PART_PN } from '../actions/types'

const INIT_STATE = { getPart: [] }

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case GET_PART:
      const getPart = action.payload
      return {
        ...state,
        getPart,
      }
    case GET_PART_PN:
      const getPart_PN = action.payload
      return {
        ...state,
        getPart_PN,
      }
    default:
      return state
  }
}