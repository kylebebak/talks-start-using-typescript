import { AnyAction } from 'redux'

export interface ToggleModal {
  visible: boolean
}
export function toggleModal(payload: ToggleModal): AnyAction {
  return {
    type: 'TOGGLE_MODAL',
    payload,
  }
}

export type Action = { type: 'TOGGLE_MODAL'; payload: ToggleModal }
