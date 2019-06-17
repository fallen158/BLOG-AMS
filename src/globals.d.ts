import React from 'react'
export interface IChangeEventFunc {
  (event: React.ChangeEvent<HTMLInputElement>): void
}
export interface IFousEventFunc {
  (event: React.FocusEvent<HTMLInputElement>): void
}

export interface IKeyboardEventFunc {
  (event: React.KeyboardEvent<HTMLInputElement>): void
}

export interface IMouseEventFunc {
  (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void
}

export interface IEffectsFn {
  call: Function,
  put: Function
}
export interface IDispatch {
  type: string,
  payload: {}
}
export interface IHistory {
  history: History
}