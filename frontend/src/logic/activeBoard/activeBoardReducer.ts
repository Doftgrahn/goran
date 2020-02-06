import { ACTIVE_BOARD, MUTATE_ACTIVE_SETLIST } from './types'

const initialState: any = {
  activeBoard: {}
}
export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIVE_BOARD:
      return {
        ...state,
        activeBoard: action.payload
      }
    case MUTATE_ACTIVE_SETLIST:
      return {
        ...state,
        activeBoard: { ...state.activeBoard, title: action.payload }
      }
    default:
      return state
  }
}
