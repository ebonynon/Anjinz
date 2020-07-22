import { GET_PART } from '../actions/types'

const INIT_STATE = { getPart: [] }

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case GET_PART:
      const getPart = action.payload
      return {
        ...state,
        getPart,
      }
    default:
      return state
  }
}
